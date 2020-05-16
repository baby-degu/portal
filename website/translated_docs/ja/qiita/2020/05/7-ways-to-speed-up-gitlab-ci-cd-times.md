---
title: 7 ways to speed up your GitLab CI/CD times
author: 
authorURL: 
---


CI/CDプラットフォームとして、スピードは開発の効率化に重要です。最近、私たちはCIのジョブを取り上げて、可能な限り早くするためにリファクタリングをしました。
以下に同じことができる方法を紹介します。

# 1.GitLab Runnerをホストする

(SaaS版GitLabで提供されている)GitLab.comは、リポジトリで使用するためのShared Runnerというツールを提供しています。すぐに軌道に乗るためには素晴らしいことですが、GitLab Runnerをホストすることで、単一の最大の速度の向上があったことを発見しました。実はボトルネックはCPUやRAMではなく、ネットワークだったのです。プライベートクラウドのサーバー上では、ネットワークは劇的に速くなります。私たちは、DigitalOceanとGoogle Cloud Platformの両方で、速度が2倍になることを常に気付いていました。

ネットワーク速度は、ビルドとデプロイにおいては特に重要です。ビルドはよくライブラリや依存関係、Dockerイメージなどのダウンロードが必要になり、デプロイは他の場所にアセットをアップロードする必要があります。GitLabのShared Runnerでネットワークが混雑した時、これらのステージは非常に遅く感じます。

幸い、Runnerのセットアップは実に簡単です！[DigitalOcean](https://www.digitalocean.com/)や[AWS](https://aws.amazon.com/),[GCP](https://cloud.google.com/)のサーバをあっという間に立ち上げて、GitLabのRunner をLinuxにインストールすることができます。あとは[これらの手順](https://docs.gitlab.com/runner/install/linux-repository.html)に従うだけです。

# 2.依存関係のプリインストール

これも大きな方法の一つです。もしCIジョブのたびに依存関係をインストールしているのなら、時間を無駄にしていると言えるでしょう。代わりに、CIジョブに必要な依存関係を全てインストールされたDockerイメージを使用するべきです。

必要な依存関係が全て含まれたイメージが見つからない場合は、イメージをプレビルドし、GitLab Runnerがアクセスできるコンテナレジストリに保管するべきです。(私たちはGitLabの[ビルドインのコンテナレジストリ](https://docs.gitlab.com/ee/user/project/container_registry.html)を使うことを好んでいます。)

# 3. CIイメージに小さいLinuxディストリビューションを使用する

可能であれば、CIジョブを実行するイメージには小さいLinuxディストリビューションを使用しましょう。[Alpine Linux](https://alpinelinux.org/)がおそらくもっともポピュラーな選択肢ですが、他にもあります。

なぜ小さいLinuxディストリビューションを使用するのでしょうか？CIジョブは、いくつかのテストを実行したり、いくつかのビルドコマンドを実行するためにUbuntuのような肥大化したディストリビューションを必要としないことです。そのため、30倍から40倍のサイズのイメージをダウンロードすることに時間を浪費してはいけません。

# 4. Overlay2 ストレージドライバを使用する

CIの速度を上げる単一でもっとも簡単な方法は、デフォルトのVFS ドライバ(詳しく見る)の代わりにOverlay2 Docker ストレージドライバを使用することです。gitlab-ci.ymlファイルの一番上に以下のコードを追加するだけで使用できます。

```yaml
variables:
  DOCKER_DRIVER: overlay2
```

数秒の余分な時間が短縮できることがわかったので、OverlayではなくOverlay2を使用していることを確認してください。

あるいは、Runnerをホストしていて、`config.toml`ファイルへアクセスできる場合は、`[[runners]]`([詳しくはこちら](https://docs.gitlab.com/ce/ci/docker/using_docker_build.html#using-the-overlayfs-driver))に以下のコードを加えることで自動的にこのドライバをすべてのプロジェクトで有効にすることができます。

```yaml
environment = ["DOCKER_DRIVER=overlay2"]
```

# 5. ビルド時にキャッシュされたDockerイメージを使用する

Dockerはスマートです。ビルドキャッシュを使用して、変更されたレイヤーのみをビルドすることで、イメージのビルド時間を大幅に短縮します。しかし、もしDockerが過去のビルドが見つからなければ(CIジョブを実行するたびにクリーンな状態で使用している場合に発生します)、毎回イメージを1から作成することになります。

これを直すためには、単純に`--cache-from`オプション(Docker v1.13で追加されました)で、Dockerにイメージがビルドされた場所を指定してください。より詳しい`docker build `コマンドのビルドオプションは[こちら](https://docs.docker.com/edge/engine/reference/commandline/build/#options)からご覧ください。

# 6. Dockerfileをよく検討して整理する

Dockerのビルドキャッシュといえば、それがどのように機能するかを熟知しておく必要があります。一言にまとめると、 各命令はレイヤーであり、各レイヤーが変更された場合、またはその前のレイヤーが変更された場合にのみ再ビルドされます。「変化」を構成するものは、それがどのような命令であるかによって異なります。より詳しい情報は[こちら](https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/#build-cache)から見ることができます。

重要なのは、本当に変更されていない命令を不必要に実行したくないということです。例えば、以下のようにNginxがインストールされたコンテナをもっていたとします。

```
RUN apt-get -y update && \
    apt-get -y install nginx
```

おそらく、（例えば、以下の記述されたコードのように）ソースファイルをコピーする命令を、Nginxをインストールする命令の前に置きたくないでしょう。

```
COPY source/ /usr/share/nginx/html
```

どうしてでしょうか？ほとんどの場合、ソースを変更した時にDockerにNginxを再インストールする必要がないからです。ビルドも遅くなってしまいます。

# 7.GitLabの強力な設定の利点を生かす

GitLabには3つの便利な機能があります。適切に利用できれば、パイプラインを大幅に高速化することができます。

## 動的に依存関係をキャッシュする

ジョブの実行中に動的に依存関係をインストールする必要がある場合や、いくつかの理由でCIイメージをプレビルドができない場合は、GitLab のキャッシュをジョブ間で使用することを検討してください。ビルド間でnode_modulesディレクトリをキャッシュする方法を以下のデモンストレーションで見てみましょう。

```yaml
example-job:
  script:
    - yarn install --frozen-lockfile --check-files
  cache:
    paths:
      - node_modules/
```

詳細なGitLabのキャッシュの設定については[こちら](https://docs.gitlab.com/ee/ci/yaml/#cache)からご覧ください。

## 関連ファイルが変更された場合のみジョブを実行する
特に依存しない複数のアプリやマイクロサービスを単一のレポジトリで運用している場合に便利です。例えば、一つのフロントエンドのアプリを変更し、他には変更を加えていない場合に変更していないアプリにテストを実行する理由はありますでしょうか？

時間を節約するために、[マージリクエストのパイプライン](https://docs.gitlab.com/ee/ci/merge_request_pipelines/index.html)と `only:changes` キーをペアにして、条件付きでジョブを実行することを検討してみてください。必要なジョブの実行に、変更が必要なディレクトリ/ファイルをリストアップします。共有されている依存関係も含めて、ジョブに影響を与える可能性のあるものをリストアップしてください。
以下の例を確認してみましょう。


```yaml
test-example1:
  script:
    - yarn --cwd apps/example1/ test
  only:
    changes:
      - apps/example1/**/*
      - shared-dependencies/**/*
test-example2:
  script:
    - yarn --cwd apps/example2/ test
  only:
    changes:
      - apps/example2/**/*
      - shared-dependencies/**/*
```

この機能の利用に関するより詳細な情報は[こちら](https://docs.gitlab.com/ee/ci/yaml/#onlychangesexceptchanges)をご覧ください。

## 将来のステージから早期にジョブを実行する

ステージは似たようなジョブを整理するのに最適な方法で、ほとんどの場合、ステージのジョブは前のステージのジョブがすべて成功するまで実行されません。しかし、考えてみれば、中には、失敗してもプロジェクトに悪影響を与えずに安全に早期に実行できるジョブが少なくともいくつかあるでしょう。

例えば、私たちはよくUIのリグレッションテストにChromaticを使用します。これらのジョブはパイプラインの最後に発生するので、失敗しても（例: 視覚的な変更が検出されても）、パイプラインがレビュー環境に変更を展開するのを妨げることはありません。しかし、それがパイプラインで実行が遅くなってしまう唯一の理由です。

これらのケースでは、`needs`キーを使用することを検討してください。それは、将来のステージでジョブを実行する前に処理する必要がある、以前のステージからの限定されたジョブのセットを指定するためです。効率的に使用すれば、特にパイプラインの終わりに向かって実行されている遅いジョブについては、かなりの時間を削減することができます。

`needs`キーの利用に関するより詳細な情報は[こちら](https://docs.gitlab.com/ee/ci/yaml/#needs)をご覧ください。

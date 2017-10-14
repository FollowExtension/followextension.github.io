nunjucks.configure({ autoescape: false });

var resourceStrings = {
	ko: {
		menu: {
			about: 'About',
			service: 'Service',
			project: 'Project',
			community: 'Community'
		},

		header: {
			title: 'Follow Extension',
			content: 'Decentralized Reward System Extension',
			paper: '백서',
			path: 'Follow_Extension_Abstract_Paper_Korean.pdf'
		},

		content: {
			header: {
				title: '탈중앙 보상 시스템 익스텐션',
				content: 'Follow Extension은 서비스들이 블록체인 기술을 이용해 탈중앙화된 보상 시스템을 적용할 수 있도록 도와주는 Extension 입니다. 각 서비스 어플리케이션들이 Follow Extension 을 적용하면, 컨텐츠 제공자와 소비자들이 기존 유통구조의 과도한 수수료로부터 벗어나 합리적인 가격으로 컨텐츠를 거래할 수 있습니다. 그뿐 아니라 기존의 아무런 보상이 없던 소셜 미디어 플랫폼에서도 가치 있는 고품질의 컨텐츠를 만들 수 있는 동기를 부여하여 새로운 시장을 형성 시킬 수 있습니다.'
			},
			features: {
				first: {
					title: '컨텐츠 보상 시스템',
					content: '탈중앙화된 시스템을 이용하면 지금까지의 시장처럼  컨텐츠 유통 플랫폼이 과도하게 많은 수수료를 가져가는 낡은 시장구조를 효율적으로 변화 시킬 수 있습니다. Follow Extension을 통해 컨텐츠 제공자는 더 많은 수익을 창출할 수 있고, 소비자는 더 저렴한 비용으로  컨텐츠를 즐기게 됩니다. 이렇게 개선된 컨텐츠 제공자와 소비자 사이의 거래 방식은 더욱 고품질의 컨텐츠 생산을 촉진하고 컨텐츠 소비 시장을 더욱 활성화 시키게 될 것입니다.'
				},
				second: {
					title: '서비스 적용성',
					content: '새로운 탈중앙  보상 시스템으로  개선된 컨텐츠 유통시장은  새로 생겨나는 서비스 뿐 아니라, 이미 시장에 자리잡은 서비스들에도 적용이 가능합니다. 이 보상 시스템은 방대한 유저풀을 가지고 있는 소셜 미디어 플랫폼에 적용하여 기존에는 불가능했던 고급 컨텐츠에 대한 직접적인 보상이 이루어질 수 있게 변화시킵니다. Follow Extension은 가볍고 적용성이 뛰어난 Extension으로써 이미 우리가 친숙하게 사용중인 다양한 서비스들에 적용되어 시너지를 만들 수 있습니다.'
				},
				third: {
					title: '커뮤니티',
					content: 'Follow Extension은 법인이나 중앙화된 특정 단체가 주관하는 프로젝트가 아닌 오픈소스로 진행이 됩니다. 비트코인과 이더리움 같은 성공적인 프로젝트들은 커뮤니티 기반 오픈소스 프로젝트였기 때문에 가시적인 성과를 만들 수 있었습니다. 블록체인 프로젝트의 핵심 가치는 탈중앙화이기 때문에 오픈소스로 진행될 때 블록체인의 본질과 가치를 실현할 수 있습니다. Follow Extension 프로젝트는 커뮤니티 멤버가 프로젝트 발전에 기여하고, 보상을 받으며 프로젝트를 성장시킬 수 있는 생태계를 제공합니다.'
				}
			}
		},

		service: {
			header: {
				title: '익스텐션을 적용하는 자체 서비스',
				content: 'Follow Extension은 다양한 서비스에 적용되면서 컨텐츠 제공자와 소비자 사이의 거래가 활성화될수록 성장합니다. 이에 코어팀이 프로젝트를 성공적으로 성장시키기 위해서 Follow Extension을 적용한 자체 서비스를 개발하고 운영합니다. 익스텐션 개발과 자체 서비스 개발을 병행하여 시너지 효과를 만들어내고, Follow Extension의 장점과 새로운 가능성을 시장에	직접 알릴 수 있는 기회를 창출합니다.'
			},
			content: {
				title: 'Coinbine',
				paragraphs: [
					'코인바인은 암호화폐와 관련된 유틸리티와 커뮤니티를 제공하는 서비스입니다.',
					'코인바인에서는 다양한 거래소들의 비트코인과 알트코인들의 시세를 실시간으로 확인할 수 있습니다. 또 원화(KRW)로 시세 자동 변환 기능도 지원합니다. 실시간 가격을 기준으로 자신이 선택한 암호화폐가 지정한 가격에 도달하면 휴대폰 알림이 울리는 알람 서비스, 암호화폐 자산현황 대쉬보드, 거래소별 프리미엄 비교 등 다양한 유틸리티 기능을 제공합니다.',
					'유틸리티 기능뿐 아니라, 여러가지 커뮤니티 서비스들을 준비중 입니다.	코인바인은 유저들간의 소통과 정보 공유를 위해 채팅과 게시물 포스팅 서비스를 지원합니다. 뿐만 아니라 ‘함께 작성하는 오픈위키 서비스’를 통해 다수에게 검증된 다양한 알트코인들의 상세한 정보를 확인할 수 있는 믿을만한 암호화폐 백과사전을 만듭니다.',
					'추가적으로  코인바인 서비스에 Follow Extension을 적용하여 고급 컨텐츠 구독 서비스를 제공합니다. 이 서비스를 통해 누구나 컨텐츠 제공자가 될 수 있으며, 컨텐츠 제공자는 게시판에 프리미엄 글을 작성하거나, 팔로워를 모집하고 단체 톡방을 운영하며 수익을 창출할 수 있습니다.',
					'코인바인은 Follow Extension을 적용하는 첫번째 자체 서비스가 될 예정입니다. 코인바인 구독 서비스에서 고급 컨텐츠를 이용하기 위해서는 Follow Extension 토큰을 사용하게 됩니다. 이미 Web 버전과 Android/iOS 버전이 배포 되어있고 누구나 사용할 수 있습니다. 아직 모든 기능이 구현되어있지는 않지만, Follow Extension 개발과 코인바인 업데이트가 지속적으로 진행되면서 성장해 나가고 있습니다.'
				],
				icons: {
					web: 'Web',
					android: 'Android',
					ios: 'iOS'
				}
			}
		},

		project: {
			header: {
				title: '프로젝트의 성격과 방향',
				content: 'Follow Extension 프로젝트는 최근에 진행되는 많은 블록체인 프로젝트들의 구조적인 문제를 예방하고, 프로젝트의 핵심 성장 요소 중 하나인 커뮤니티의 발전을 최대한 극대화할 수 있는 방향으로 설계되었습니다.'
			},
			content: {
				title: 'Democratic Decentralization',
				blockquotes: [
					'특정 인물이나 단체의 독자적인 진행이 아닌, 다수의 커뮤니티에 의해 합리적인 의사결정에 의해 프로젝트가 진행됩니다.',
					'커뮤니티가 프로젝트 발전에 기여할 충분한 동기를 제공하여 성장 동력을 확보합니다.'
				]
			}
		},

		team: {
			title: "팀원",
			members: [
				{
					pic: 'images/profile-blank-female.png',
					name: 'Sung Woo Chang',
					title: 'Co-founder',
					task: 'Mobile App/Token Developer'
				},
				{
					pic: 'images/profile-blank-female.png',
					name: 'James Chang',
					title: 'Co-founder',
					task: 'Web/Server Developer'
				},
				{
					pic: 'images/profile-blank-female.png',
					name: 'Kate Kim',
					title: 'Designer',
					task: 'Product Design'
				},
				{
					pic: 'images/profile-blank-female.png',
					name: 'Jiwon Yang',
					title: 'Operator',
					task: 'Operation & Supporter'
				},
			]
		},

		poweredBy: 'Powered By',

		community: {
			header: {
				title: 'Follow Extension Community',
				content: '프로젝트 커뮤니티에 참여하고 중요한 일정과 소식을 들어보세요.'
			},
			content: {
				twitter: 'Twitter',
				slack: 'Slack',
				github: 'GitHub'
			}
		},

		copyright: '&copy; Follow Extension. All rights reserved.'
	},

	en: {
		menu: {
			about: 'About',
			service: 'Service',
			project: 'Project',
			community: 'Community'
		},

		header: {
			title: 'Follow Extension',
			content: 'Decentralized Reward System Extension',
			paper: 'White Paper',
			path: 'Follow_Extension_Abstract_Paper_English.pdf'
		},

		content: {
			header: {
				title: 'Decentralized Reward System Extension',
				content: 'Follow Extension is an extension that helps service applications to apply a decentralized reward system using blockchain technology. By applying Follow Extension to each service application, content providers and consumers can trade content at an affordable price away from paying excessive commission fees on existing distribution structures. Not only that by applying Follow Extension to social media platforms that originally do not give any reward, a new market can come together where content providers are motivated to create and provide valuable, high quality content.'
			},
			features: {
				first: {
					title: 'Content Reward System',
					content: 'With a decentralized system, you can effectively transform the old market structure, where the content distribution platform takes up an enormous amount of commissions. Through Follow Extension, content providers can generate more revenue and consumers can enjoy content at a lower cost. Such improvement in transaction between content providers and consumers will promote higher quality content production and stimulate further growth in the content market.'
				},
				second: {
					title: 'Adaptable Service',
					content: 'Such improved form of content distribution market through a new decentralization reward system can be applied not only to new emerging services, but also to services already on the market. If applied to social media platforms that have a vast amount of users, this can transform the current system where direct reward toward premium content is not given. Follow Extension is a simple and adaptable extension that can be applied to a wide range of services that we are already familiar with and create a synergy effect.'
				},
				third: {
					title: 'Community',
					content: 'Follow Extension will be open source rather than a project organized by a corporation or a centralized group. Successful projects, such as Bitcoin and Ethereum, were community based open source projects which led to surprisingly successful results. As the core value of blockchain is decentralization, such values can be realized when the project is opened to everyone. The Follow Extension project, therefore, provides a virtuous cycle where community members contribute to the development of the project while receiving a reasonable amount of compensation.'
				}
			}
		},

		service: {
			header: {
				title: 'Internal service applying Follow Extension',
				content: 'Follow Extension grows as it is applied to various services and as the transaction between content provider and consumer becomes more active. Thus, the Core Team develops and operates internal services that applies Follow Extension to successfully expand the project. By simultaneously developing the extension itself and our own services opportunity to directly inform the market of the benefits and new possibilities of Follow Extension is created.'
			},
			content: {
				title: 'Coinbine',
				paragraphs: [
					'Coinbine is a service that provides a community with utilities related to cryptocurrency.',
					'In Coinbine, you can check the price of bitcoins and altcoins in real time. It also supports the automatic conversion of the prices into KRW and other fiats. It offers a variety of utility functions such as an alarm that notifies the user when the price of the cryptocurrency reaches the designated price, personal cryptocurrency asset status dashboard, and a premium comparison between cryptocurrency exchanges.',
					'In addition to utility functions, various community services are available. Coinbine supports chat and posting services for communication and information sharing among users. Also, users can check the details of various altcoins through the "Open Wiki", a credible cryptocurrency encyclopedia verified by a large number users.',
					'Moreover, it is possible to provide an advanced content subscription service by applying Follow Extension to Coinbine. Through this service, anyone can become a content provider, and content providers can post their own posts in a format similar to Twitter, or operate group chats and generate profits.',
					'Coinbine will be the first internal service to apply Follow Extension. Follow Extension token must be used to access high-level content in Coinbine subscription service. Anyone can start and reach through the web or our Android / iOS version. While not all features are implemented yet, Follow Extension development and Coinbine developments are continuously performed.'
				],
				icons: {
					web: 'Web',
					android: 'Android',
					ios: 'iOS'
				}
			}
		},

		project: {
			header: {
				title: 'The nature and direction of the project',
				content: 'The Follow Extension project is designed to prevent the problems of many recent blockchain projects and to maximize the development of the community, one of the core growth elements of the project.'
			},
			content: {
				title: 'Democratic Decentralization',
				blockquotes: [
					'Projects are conducted by rational decision-making by a large number of communities, rather than by individual persons or groups.',
					'Ensure growth drivers by providing enough motivation for communities to contribute to project development.'
				]
			}
		},

		poweredBy: 'Powered By',

		community: {
			header: {
				title: 'Follow Extension Community',
				content: 'Join the project community and listen to important schedules and news.'
			},
			content: {
				twitter: 'Twitter',
				slack: 'Slack',
				github: 'GitHub'
			}
		},

		copyright: '&copy; Follow Extension. All rights reserved.'
	},

	ja: {
		menu: {
			about: 'About',
			service: 'Service',
			project: 'Project',
			community: 'Community'
		},

		header: {
			title: 'Follow Extension',
			content: 'Decentralized Reward System Extension',
			paper: '白書',
			path: 'Follow_Extension_Abstract_Paper_Japanese.pdf'
		},

		content: {
			header: {
				title: '脱中央報酬システムエクステンション',
				content: 'Follow Extensionはサービスがブロックチェーンの技術を利用して脱一元化された報酬システムを適用することができるように助けてくれるExtensionです。各サービスアプリケーションがFollow Extensionを適用すると、コンテンツ提供者と消費者が既存の流通構造の過度の手数料から抜け出し、リーズナブルな価格でコンテンツを取引することができます。それだけでなく、既存の何の補償がなかったソーシャルメディアのプラットフォームでも価値のある高品質のコンテンツを作成することができる動機を付与して新たな市場を形成させることができます。'
			},
			features: {
				first: {
					title: 'コンテンツの報酬システム',
					content: '脱集中されたシステムを利用すれば、今までの市場のようにコンテンツ流通プラットフォームが過度に多くの手数料を持っていく古い市場の構造を効率的に変化させることができます。 Follow Extensionを使用して、コンテンツプロバイダは、より多くのお金を稼ぐことができ、消費者は、より低コストでコンテンツを楽しむされます。このように改善されたコンテンツ提供者と消費者の間の取引方式は、さらに高品質のコンテンツの生産を促進し、コンテンツ消費市場をさらに活性化させることになります。'
				},
				second: {
					title: 'サービス適用性',
					content: '新しい脱中央報酬システムに改善されたコンテンツ流通市場は、新たに生まれるサービスだけではなく、すでに市場に位置するサービスにも適用が可能です。この補償システムは、膨大なユジョプルを持っているソーシャルメディアプラットフォームに適用して、従来は不可能だった、高度なコンテンツへの直接補償が行われるように変化させます。 Follow Extensionは軽く適用性に優れたExtensionことはすでに我々が身近に使用されている様々なサービスに適用されて相乗効果を作成することができます。'
				},
				third: {
					title: 'コミュニティ',
					content: 'Follow Extensionは、法人や一元化された特定の団体が主催するプロジェクトではなく、オープンソースで進行がされます。ビットコインのイーサネットリウムなどのプロジェクトの成功は、コミュニティベースのオープンソースプロジェクトであったため、目に見える成果を作ることができました。ブロックチェーンプロジェクトの中核的価値は脱集中化であるため、オープンソースで進行すると、ブロック鎖の本質と価値を実現することができます。したがってFollow Extensionプロジェクトは、コミュニティのメンバーがプロジェクトの発展に貢献し、合理的な補償を受け、プロジェクトを成長させることができる好循環生態系を提供します。'
				}
			}
		},

		service: {
			header: {
				title: 'エクステンションが適用される、独自のサービス',
				content: 'Follow Extensionは、さまざまなサービスに適用され、コンテンツ提供者と消費者の間の取引活性化すればするほど成長します。これコアチームがプロジェクトを成功に成長させるためにFollow Extensionを適用した、独自のサービスを開発して運営します。エクステンションの開発と、独自のサービスを開発を並行して相乗効果を生み出し、Follow Extensionの利点と新たな可能性を市場に直接知らせることができる機会を創出します。'
			},
			content: {
				title: 'Coinbine',
				paragraphs: [
					'コインバインは、パスワード貨幣に関連するユーティリティとコミュニティを提供するサービスです。',
					'コインバインでは、様々な取引所のビットコインとアルトコインの相場をリアルタイムで確認することができます。また、原画（KRW）に相場自動変換機能もサポートします。リアルタイムの価格を基準に、自分が選択したパスワード貨幣が指定した価格に到達すると、携帯電話の通知が鳴っアラームサービス、パスワード貨幣資産の現状ダッシュボード、取引所別プレミアム比較など、さまざまなユーティリティ機能を提供します。',
					'ユーティリティの機能だけでではなく、様々なコミュニティサービスが用意されています。コインバインは、ユーザ間のコミュニケーションと情報共有のためのチャットや記事の投稿サービスをサポートします。だけでなく、「一緒に作成するオープンウィキサービス」を通じて多数に検証された様々なアルトコインの詳細な情報を確認できる信頼性の高いパスワード貨幣百科事典を作成します。',
					'さらにコインバインサービスにFollow Extensionを適用して、高度なコンテンツのサブスクリプションサービスを提供しています。このサービスを使用して誰もコンテンツ提供者になることがあり、コンテンツ提供者は、Twitterと同様の形式で、自分の文章をポストしたり、団体トクバンを運営し、収益を創出することができます。',
					'コインバインはFollow Extensionを適用する最初のセルフサービスとなる予定です。コインバイン購読サービスの高度なコンテンツを利用するためには、Follow Extensionトークンを使用します。すでにWeb版とAndroid / iOSのバージョンが配布されており、誰でも使用することができます。まだすべての機能が実装されていませんが、Follow Extension開発とコインバインの更新が継続的に行われ、成長していきます。'
				],
				icons: {
					web: 'Web',
					android: 'Android',
					ios: 'iOS'
				}
			}
		},

		project: {
			header: {
				title: 'プロジェクトの性格と方向',
				content: 'Follow Extensionプロジェクトは、最近行われている多くのブロックチェーンプロジェクトの構造的な問題を予防し、プロジェクトの重要な成長要因の一つであるコミュニティの発展を最大限に最大化することができる方向に設計された。'
			},
			content: {
				title: 'Democratic Decentralization',
				blockquotes: [
					'特定の人物や団体の独自の進行ではなく、多数のコミュニティによって合理的な意思決定によってプロジェクトが進行されます。',
					'コミュニティがプロジェクトの発展に寄与する十分な動機を提供して成長動力を確保します。'
				]
			}
		},

		poweredBy: 'Powered By',

		community: {
			header: {
				title: 'Follow Extension Community',
				content: 'プロジェクトのコミュニティに参加して、重要な日程とニュースを聞いてください。'
			},
			content: {
				twitter: 'Twitter',
				slack: 'Slack',
				github: 'GitHub'
			}
		},

		copyright: '&copy; Follow Extension. All rights reserved.'
	},

	zh: {
		menu: {
			about: 'About',
			service: 'Service',
			project: 'Project',
			community: 'Community'
		},

		header: {
			title: 'Follow Extension',
			content: 'Decentralized Reward System Extension',
			paper: '量子链白皮书',
			path: 'Follow_Extension_Abstract_Paper_Chinese.pdf'
		},

		content: {
			header: {
				title: '权力下放补偿制度延伸',
				content: '跟随是一种扩展，帮助服务使用块链技术应用分散式补偿系统。通过对每个服务应用程序应用跟踪扩展，内容提供商和消费者可以以合理的价格交易内容，避免对现有分发结构的过多佣金。不仅如此，您也可以通过激励您创造有价值的高质量内容，甚至在没有现有奖励的社交媒体平台上创造新市场。'
			},
			features: {
				first: {
					title: '内容补偿制度',
					content: '通过分散制度，内容分发平台可以有效地改变旧市场结构，过去的市场过剩佣金。随着追踪扩展，内容提供商可以产生更多的收入，消费者以更低的成本享受内容。内容提供商和消费者之间的这种改进交易将促进更高质量的内容生产，并将进一步刺激内容消费市场。'
				},
				second: {
					title: '服务适用性',
					content: '改进的内容分发市场与新的集中化系统不仅可以应用于新兴服务，还可以应用于市场上的服务。这种奖励制度适用于拥有庞大人数的社交媒体平台，直接奖励以前无法实现的优质内容。遵循扩展是一种轻量级和适应性强的扩展，可以应用于我们已经用于创建协同效应的各种服务。'
				},
				third: {
					title: '社区',
					content: '跟随扩展是开源的，而不是由公司或集中组织组织的项目。成功的项目，比如比特币和Ethereum，都是以社区为基础的开源项目，取得了可观的成果。由于块链项目的核心价值在于权力下放，因此在开源时可以实现块链的实质和价值。因此，跟进推广项目提供了一个良性循环生态系统，社区成员为项目的开发做出贡献，获得合理的补偿并增加项目。'
				}
			}
		},

		service: {
			header: {
				title: '自助服务与扩展应用',
				content: '随着扩展增长，内容提供商和消费者之间的事务被激活，因为它们被应用于各种服务。核心团队通过跟踪扩展开发和运营自己的服务，以成功扩展项目。通过扩展和自助服务开发相结合，创造了协同效应，并创造了直接向市场通报追踪延伸的好处和新可能性的机会。'
			},
			content: {
				title: 'Coinbine',
				paragraphs: [
					'硬币藤是提供与加密相关的公用事业和社区的服务。',
					'在葡萄藤中，您可以实时检查各种交易所的打击硬币和替代硬币价格。它还支持将价格自动转换为韩元。提供各种实用功能，例如报警服务，当您选择的香烟根据实时价格，密码货币资产信息中心和交易所的溢价比较达到指定的价格时，您可以提醒您。',
					'除了效用功能之外，还提供各种社区服务。硬币藤支持聊天和发布服务，供用户沟通和共享信息。另外，“开放维基服务”一起创建一个可信的密码货币百科全书，可以检查各种经过验证的阿尔托硬币的详细信息。',
					'此外，追加扩展应用于投币服务，以提供高级内容订阅服务。通过这项服务，任何人都可以成为内容提供商，内容提供商可以以类似于Twitter的格式发布自己的帖子，进行群聊，并产生收益。',
					'投资将是第一个自助服务，以应用追踪扩展。要在投币式订阅服务中使用高级内容，您将使用跟随扩展令牌。它已经具有网络版本和Android / iOS版本，可供任何人使用。虽然并不是所有的功能都实现了，但是随着扩展开发和投入更新的不断发展。'
				],
				icons: {
					web: 'Web',
					android: 'Android',
					ios: 'iOS'
				}
			}
		},

		project: {
			header: {
				title: '项目的性质和方向',
				content: '跟踪扩展项目旨在防止最近的块链项目的结构性问题，并最大限度地发展社区，这是该项目的核心增长要素之一。'
			},
			content: {
				title: 'Democratic Decentralization',
				blockquotes: [
					'项目由大量社区的理性决策而不是个人或团体进行。',
					'确保增长动力，为社区提供足够的动力，为项目开发作出贡献。'
				]
			}
		},

		poweredBy: 'Powered By',

		community: {
			header: {
				title: 'Follow Extension Community',
				content: '加入项目社区，听重要时间表和新闻。'
			},
			content: {
				twitter: 'Twitter',
				slack: 'Slack',
				github: 'GitHub'
			}
		},

		copyright: '&copy; Follow Extension. All rights reserved.'
	}
};

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 1000px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// CSS polyfills (IE<9).
		if (skel.vars.IEVersion < 9)
			$(':last-child').addClass('last-child');

		// Scrolly links.
		$('.scrolly').scrolly();

		// Prioritize "important" elements on narrow.
		skel.on('+narrow -narrow', function() {
			$.prioritize(
				'.important\\28 narrow\\29',
				skel.breakpoint('narrow').active
			);
		});

		// Detect language
		var language = window.navigator.userLanguage || window.navigator.language;

		// Set default language as English
		if (!~Object.keys(resourceStrings).indexOf(language)) {
			language = 'en';
		}

		var $template = $('#template'),
				$container = $('#container');

		$container.html(nunjucks.renderString($template.html(), resourceStrings[language]));

		var $langSelect = $('#langSelect');
		$langSelect.find('> [value="' + language + '"]').prop('selected', true);
		$langSelect.prettyDropdown();

		window.langChange = function(lang) {
			$container.html(nunjucks.renderString($template.html(), resourceStrings[lang]));
			var $langSelect = $('#langSelect');
			$langSelect.find('> [value="' + lang + '"]').prop('selected', true);
			$langSelect.prettyDropdown();
		}
	});

})(jQuery);
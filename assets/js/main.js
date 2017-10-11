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
			title: '팔로우 익스텐션',
			content: 'Decentralized Reward System Extension',
			paper: 'Abstract Paper'
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
			paper: 'Abstract Paper'
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

	ja: {
		menu: {
			about: 'About',
			service: 'Service',
			project: 'Project',
			community: 'Community'
		},

		header: {
			title: 'フォローエクステンション',
			content: 'Decentralized Reward System Extension',
			paper: 'Abstract Paper'
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

	zh: {
		menu: {
			about: 'About',
			service: 'Service',
			project: 'Project',
			community: 'Community'
		},

		header: {
			title: '追随扩展',
			content: 'Decentralized Reward System Extension',
			paper: 'Abstract Paper'
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
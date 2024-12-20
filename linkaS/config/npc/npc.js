db.add([
	{
		id: 'npc1',
		type: 'npc',
		name: 'CAte',
		place_x: 200,
		place_y: 200,
		place: [200, 200, 0 , 32, 0],
		program: [ // program_id[0]
			{
				type: 'program',
				trigger_y: ['overlap'],
				// mode: ['all'],
				// __already: false,
				// loop: true,
				program: [ // program_id[1]
					{
						type: 'text',
						mode: '随机',
						//place: 'npc_top',
						text: [
							"LPS 是 DrimTech 之母",
							"山川异域, 日月同天",
							"www",
							"关注 DrimTech 谢谢喵",
							"\"当你拥有了一切, 你也将失去尝试新东西的动力, 并体会到一种前所未有的孤独\"",
							"MickyDot 太可爱了，大家千万不要和他聊天，不然会对 MickyDot 上瘾的……",
							"我已经对 MickyDot 欲罢不能了",
							"一群热爱信息技术，善于创造的羊羔",
							"喵呜~",
							"代码已在 Github 开源",
							"我很可爱，请给我钱",
							"你找到我！DrimTech",
							"结束时, 另一个重复将会开始",
							"\"望着星空的我们\"",
							"此时无声胜有声",
						],
					},
				],
			},
			{
				type: 'program',
				trigger_y: ['attack'],
				mode: ['pointer'],
				// __pointer: 0,
				// loop: true,
				program: [
					[ // 0
						{
							type: 'js', // 禁用按键
							code: `$t.plugins.WASD.disable = true;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: true},
								{id: '上下黑边', mode: true},
							],
						},
						{type: 'text', text: '我很可爱，请给我钱'},
					],
					{type: 'text', text: '你看见了几条消息？'},
					{type: 'text', text: '错, 是四条'},
					[
						{type: 'text', sudo_trigger_x: false},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: false},
								{id: '上下黑边', mode: false},
							],
						},
						{
							type: 'js', // 恢复按键
							code: `$t.plugins.WASD.disable = false;`,
						},
					]
				]
			},
		],
	},
	{
		id: 'npc5',
		type: 'npc',
		name: 'rotate3d test',
		place_x: 1137,
		place_y: -217,
		place: [1137, -217, 0 , 294, 0],
		program: [
			{
				type: 'program',
				trigger_y: ['attack'],
				mode: ['pointer'],
				program: [
					{
						type: 'js',
						code: `
							lib.geb('logo-en').style.transform = 'rotate3d(-3, -2, 2, 306deg)';
							lib.geb('logo-en').style.width = '692px';

							lib.geb('logo-zh').style.transform = 'rotate3d(-3, 3, 1, 319deg)';
							lib.geb('logo-zh').style.position = 'absolute';
							lib.geb('logo-zh').style.width = '640px';
							lib.geb('logo-zh').style.top = '-113px';
							lib.geb('logo-zh').style.left = '358px';
						`,
					},
					{
						type: 'js',
						code: `
							lib.geb('logo-en').style.transform = '';
							lib.geb('logo-en').style.width = '';

							lib.geb('logo-zh').style.transform = '';
							lib.geb('logo-zh').style.position = 'absolute';
							lib.geb('logo-zh').style.width = '';
							lib.geb('logo-zh').style.top = '0';
							lib.geb('logo-zh').style.left = '1100px';
						`,
					},
				],
			},
		],
	},
	{
		id: 'npc6',
		type: 'npc',
		name: '#二仙桥大爷',
		place_x: -2292,
		place_y: 53,
		place: [-2292, 53, 0 , 0, 0],
		program: [
			{
				type: 'program',
				trigger_y: ['attack'],
				mode: ['pointer'],
				program: [
					[
						{
							type: 'js', // 禁用按键
							code: `$t.plugins.WASD.disable = true;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: true},
								{id: '上下黑边', mode: true},
							],
						},
						{type: 'text', mode: 'default_addp', addp: 'clear_pre'},
						{type: 'text', text: '...'},
					],
					{type: 'text', text: '我问你, 你该走哪?', sudo_npc_id: 'npc7'},
					{type: 'text', text: '到二仙桥'},
					{type: 'text', text: '我是说你该走哪根道?', sudo_npc_id: 'npc7'},
					{type: 'text', text: '走成华大道'},
					{type: 'text', text: '...', sudo_npc_id: 'npc7'},
					{type: 'text', text: '你这车子, 你这车子能拉吗?', sudo_npc_id: 'npc7'},
					{type: 'text', text: '只能拉一点点儿'},
					{type: 'text', text: '拉一点点儿'},
					{type: 'text', text: '我是问你能不能拉?', sudo_npc_id: 'npc7'},
					{type: 'text', text: '能, 只能拉一点点儿, 不能拉多了'},
					{type: 'text', text: '你看你.. 我都被你搞糊涂了, 师傅', sudo_npc_id: 'npc7'},
					[
						{type: 'text', sudo_trigger_x: false, sudo_npc_id: 'npc7'},
						{
							type: 'js', // 恢复按键
							code: `$t.plugins.WASD.disable = false;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: false},
								{id: '上下黑边', mode: false},
							],
						},
					]
				],
			},
		],
	},
	{
		id: 'npc7',
		type: 'npc',
		name: '#谭警光',
		place_x: -2157,
		place_y: 53,
		place: [-2157, 53, 0 , 0, 0],
		program: [],
	},
	{
		id: 'npc8',
		type: 'npc',
		name: '一只路人',
		place_x: -814,
		place_y: 0,
		place: [-814, 0, 0 , 0, 0],
		program: [
			{
				type: 'program',
				trigger_y: [['overlap', true], ['attack']],
				mode: ['pointer'],
				program: [
					[
						{
							type: 'js', // 禁用按键
							code: `$t.plugins.WASD.disable = true;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: true},
								{id: '上下黑边', mode: true},
							],
						},
						{type: 'text', text: '嘿! 你撞到我了!'},
					],

					{type: 'text', text: '...'},
					{type: 'text', text: '...'},
					{type: 'text', text: '你怎么不说话'},
					[
						{
							type: 'js', // 恢复按键
							code: `$t.plugins.WASD.disable = false;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: false},
								{id: '上下黑边', mode: false},
							],
						},
					]
				],
			},
			{
				type: 'program',
				trigger_y: ['overlap', false],
				mode: ['all'],
				program: [
					{type: 'text', sudo_trigger_x: false},
				],
			},
		],
	},
	{
		id: 'npc9',
		type: 'npc',
		name: '药水商人',
		place_x: -34,
		place_y: -179,
		place: [-34, -179, 0 , 0, 0],
		program: [
			{
				type: 'program',
				trigger_y: ['overlap'],
				program: [
					{
						type: 'text',
						mode: '随机',
						//place: 'npc_top',
						text: [
							'早上好, 中午好, 以及晚上好',
							'看看有什么需要的吧',
							'您好, 买?',
							'别担心, 消费能促进这个世界的进步',
							'嗯哼',
							'有备无患, 有备无患啊朋友',
						],
					},
				],
			},
			{
				type: 'program',
				trigger_y: ['attack'],
				mode: ['pointer'],
				program: [
					[
						{
							type: 'js', // 禁用按键
							code: `$t.plugins.WASD.disable = true;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: true},
								{id: '上下黑边', mode: true},
							],
						},
						{
							type: 'js', // 初始化商人计数器
							code: `if($data.npc?.npc9 === undefined) $data.npc.npc9 = {sellOut: false}`,
						},
						{
							type: 'program',
							program: [
								{type: 'text', text: '想体验一下我们的新产品吗?'},
							],
						},
					],
					[
						{type: 'text', text: '放心, 是免费的'},
						{
							type: 'decision',
							mode: true,
							data: [
								{id: 1, text: '收下'},
								{id: 2, text: '拒绝'},
								{id: 3, text: '钝角'},
							],
						},
					],
					[
						{type: 'decision', mode: false},
						{
							type: 'program',
							trigger_x: `$t.npc_func.decision.id == 1`,
							program: [
								{
									type: 'js', // 修改移动速度, 更新商品计数器
									code: `
										$t.plugins.WASD.stepSize = 32;
										$data.npc.npc9 = true;
									`,
								},
								{type: 'text', text: '感觉如何(╹ڡ╹ )'},
							],
						},
						{
							type: 'program',
							trigger_x: `$t.npc_func.decision.id == 2`,
							program: [
								{
									type: 'js', // 恢复移动速度
									code: `$t.plugins.WASD.stepSize = 13`,
								},
								{type: 'text', text: '欢迎下次光临~'},
							],
						},
						{
							type: 'program',
							trigger_x: `$t.npc_func.decision.id == 3`,
							program: [
								{type: 'text', text: '哎呀'},
							],
						},
						{
							type: 'js', // 恢复按键
							code: `$t.plugins.WASD.disable = false;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: false},
								{id: '上下黑边', mode: false},
							],
						},
					],
					[
						{type: 'text', sudo_trigger_x: false},
						{
							type: 'js', // 恢复按键
							code: `$t.plugins.WASD.disable = false;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: false},
								{id: '上下黑边', mode: false},
							],
						},
					]
				],
			},
		],
	},
	{
		id: 'npc_github',
		type: 'npc',
		name: 'Github',
		place: [520, -250, 0, 0, 0],
		program: [
			{
				type: 'program',
				trigger_y: ['overlap'],
				program: [
					{
						type: 'text',
						text: '林桛杨高已在 GitHub 开源w'
					}
				]
			},
			{
				type: 'program',
				trigger_y: ['overlap', false],
				mode: ['all'],
				program: [
					{type: 'text', sudo_trigger_x: false}
				]
			},
			{
				type: 'program',
				trigger_y: ['attack'],
				mode: ['pointer'],
				program: [
					[
						{
							type: 'js',
							code: `$t.plugins.WASD.disable = true;`
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: true},
								{id: '上下黑边', mode: true}
							]
						},
						{type: 'text', text: '你好，要访问林桛杨高的 GitHub 仓库吗？'},
						{
							type: 'decision',
							mode: true,
							data: [
								{id: 1, text: '访问'},
								{id: 2, text: '离开'}
							]
						}
					],
					[
						{type: 'decision', mode: false},
						{
							type: 'program',
							trigger_x: `$t.npc_func.decision.id == 1`,
							program: [
								{
									type: 'js',
									code: `window.open("https://github.com/DrimTech-program/LinkaYG", "_blank");`
								}
							]
						},
						{
							type: 'js',
							code: `$t.plugins.WASD.disable = false;`
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: false},
								{id: '上下黑边', mode: false}
							]
						}
					]
				]
			}
		]
	}
]);
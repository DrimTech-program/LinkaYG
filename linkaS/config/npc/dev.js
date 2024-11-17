db.add([
	{
		id: 'npc_zhizhi',
		type: 'npc',
		name: '致之',
		place: [465, -450, 0, 52, 0],
		program: [
			{
				type: 'program',
				trigger_y: ['overlap'],
				mode: ['all'],
				program: [
					{type: 'text', text: '林桛杨高开发者'},
				],
			},
			{
				type: 'program',
				trigger_y: ['attack'],
				mode: ['pointer'],
				program: [
					[
						{
							type: 'js',
							code: `$t.plugins.WASD.disable = true;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: true},
								{id: '上下黑边', mode: true},
							],
						},
						{type: 'text', text: '欢迎来到林桛杨高！'},
					],
					{type: 'text', text: '愿你在杨高度过难忘的三年！'},
					[
						{type: 'text', sudo_trigger_x: false},
						{
							type: 'js',
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
			}
		],
	},
	{
		id: 'npc_mickydot',
		type: 'npc',
		name: 'MickyDot',
		place: [640, -450, 0, 52, 0],
		program: [
			{
				type: 'program',
				trigger_y: ['overlap'],
				mode: ['all'],
				program: [
					{type: 'text', text: '校园平面图美化'},
				],
			},
			{
				type: 'program',
				trigger_y: ['attack'],
				mode: ['pointer'],
				program: [
					[
						{
							type: 'js',
							code: `$t.plugins.WASD.disable = true;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: true},
								{id: '上下黑边', mode: true},
							],
						},
						{type: 'text', text: 'DrimTech 欢迎你w'},
					],
					[
						{type: 'text', sudo_trigger_x: false},
						{
							type: 'js',
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
			}
		],
	},
	{
		id: 'npc_lemonfish',
		type: 'npc',
		name: '柠檬烤鱼',
		place: [815, -450, 0, 52, 0],
		program: [
			{
				type: 'program',
				trigger_y: ['overlap'],
				mode: ['all'],
				program: [
					{type: 'text', text: '杨高的路本没有名字……'},
				],
			},
			{
				type: 'program',
				trigger_y: ['attack'],
				mode: ['pointer'],
				program: [
					[
						{
							type: 'js',
							code: `$t.plugins.WASD.disable = true;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: true},
								{id: '上下黑边', mode: true},
							],
						},
						{type: 'text', text: '就叫羊羔路吧'},
					],
					[
						{type: 'text', sudo_trigger_x: false},
						{
							type: 'js',
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
			}
		],
	}
]);

db.add([
	{
		id: 'npc2',
		type: 'npc',
		name: 'Chillizu',
		place_x: 500,
		place_y: 200,
		place: [500, 200, 0 , 32, 0],
		program: [
			{
				type: 'program',
				trigger_y: ['overlap'],
				program: [
					{type: 'text', text: '欢迎~'},
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
							code: `$t.plugins.WASD.disable = true;`,
						},
						{
							type: 'animationLib',
							data: [
								{id: '主体放大', mode: true},
								{id: '上下黑边', mode: true},
							],
						},
						{type: 'text', text: 'Micky 坏！'},
					],
					{type: 'text', text: 'Micky 坏！！！'},
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
				]
			}
		]
	},
]);

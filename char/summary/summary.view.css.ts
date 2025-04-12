namespace $.$$ {
	
	$mol_style_define( $hyoo_dungeon_char_summary, {
		
		flex: {
			basis: '50rem',
		},
		
		Columns: {
			flex: {
				wrap: 'wrap',
			},
			align: {
				items: 'flex-start',
			},
			justify: {
				content: 'space-between',
			},
			gap: $mol_gap.block,
		},
		
		Info: {
			background: {
				color: $mol_theme.card,
			},
			flex: {
				grow: 1,
			},
		},
		
		Image: {
			width: 'auto',
			justify: {
				self: 'stretch',
			},
			aspectRatio: 1,
		},
		
		Base: {
			justify: {
				self: 'stretch',
			},
		},
		
		Main: {
			flex: {
				wrap: 'wrap',
			},
			justify: {
				self: 'stretch',
				content: 'space-between',
			},
		},
		
		Stat: {
			padding: 0,
			flex: {
				grow: 1,
				wrap: 'wrap',
			},
			justify: {
				content: 'space-between',
			},
			gap: $mol_gap.block,
		},
		
		Name: {
			color: $mol_theme.special,
		},
		
		Ability_list: {
			flex: {
				direction: 'column',
			},
		},
		
		Skill_list: {
			flex: {
				basis: '11rem',
				direction: 'column',
			},
		},
		
	} )
	
}

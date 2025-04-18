namespace $.$$ {
	
	$mol_style_define( $hyoo_dungeon_char_summary, {
		
		flex: {
			basis: '105rem',
			grow: 1,
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
			flex: {
				grow: 1,
				basis: '20rem',
			},
		},
		
		Inventory_block: {
			flex: {
				basis: '30rem',
			},
		},
		
		Top: {
			flex: {
				wrap: 'wrap',
			},
			justify: {
				self: 'stretch',
				content: 'space-between',
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
		
		Personality: {
			background: {
				color: $mol_theme.card,
			},
		},
		
		Stat_main: {
			flex: {
				basis: `16rem`,
			},
			gap: $mol_gap.block,
		},
		
		Master_bonus: {
			Value: {
				flex: {
					basis: '6.25rem',
				},
			},
		},
		
		Hits_heal: {
			Value: {
				flex: {
					basis: '4rem',
				},
			},
		},
		
		Skills: {
			flex: {
				basis: '14rem',
			},
		},
		
		Perks_block: {
			flex: {
				basis: '16rem',
			},
		},
		
		Perks: {
			background: {
				color: $mol_theme.card,
			},
		},
		
		Inventory: {
			background: {
				color: $mol_theme.card,
			},
		},
		
	} )
	
}

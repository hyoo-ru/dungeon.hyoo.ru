namespace $.$$ {
	export class $hyoo_dungeon_skill_config extends $.$hyoo_dungeon_skill_config {
		
		@ $mol_mem
		override skill_list() {
			return Object.keys( this.$.$hyoo_dungeon_skill_all ).map( ability => this.Skill_row( ability ) )
		}
		
		override skill_title( id: $hyoo_dungeon_skill_id ) {
			return this.$.$hyoo_dungeon_skill_all[ id ].title
		}
		
	}
}

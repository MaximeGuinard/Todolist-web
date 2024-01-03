new Vue ({
	el: '#taskList',
	data: {
		title: 'to do list',
		tasks: [
			{ name: 'Acheter un nouveau stylo' },
			{ name: 'Lire un livre "Iznogoud - Tome 32"' },
			{ name: 'Rencontre avec la team' }
		]
	},
	methods: {
		newItem: function() {
			if (!this.tasks.name) {
				return
			}
			this.tasks.push ( {
				name: this.tasks.name,
				del: ''
			});
      this.tasks.name = "";
		},
		delItem: function (task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	}
})
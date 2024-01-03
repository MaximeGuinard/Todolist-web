new Vue ({
	el: '#taskList',
	data: {
		title: 'to do list',
		tasks: [
			{ name: 'Start a new pen' },
			{ name: 'Read a book' },
			{ name: 'Meeting with team' }
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
Meteor.startup(function() {
	if ( Articles.find().count() === 0) {
		var articles = [
			{ 	'title': 'Matisse Cut Outs',
					'content': 'cool cutouts by matisse',
					'tag': 'boop'
			}
		];

		for (var i = 0; i < articles.length; i++)
			Articles.insert({title: articles[i].title, content: articles[i].content});
	}
})
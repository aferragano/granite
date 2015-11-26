Articles = new Mongo.Collection('articles');

if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Articles.find().count ===0) {
			var articles = [
				{
					title: "Henri Matisse Cut Outs",
					content: " it was an awesome gallery on desiplay in the MOMA"
				},
				{
					title: "Gay Robt",
					content: " rob taking gay pictures of gay things infire island"
				}
				];
				for (var i = 0; i < articles.length; i ++)
					Articles.insert(articles[i]);
		}
	})
}
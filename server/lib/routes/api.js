exports.addRoutes = function(app, crud) {
  // This route deals enables HTML5Mode by forwarding missing files to the index.html
  app.get('/shows', crud.AllShows);
  app.get('/shows/id/:id', crud.ShowOneID);
  app.get('/shows/:showid', crud.Show);
}
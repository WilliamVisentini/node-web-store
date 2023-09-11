exports.getTest = (req, res, next) => {
    res.render('test/test', {
      path: '/test',
      pageTitle: 'Test'
    });
  };
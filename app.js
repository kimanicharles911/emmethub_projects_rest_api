const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
const fileSystem = require('fs');

app.get('/api', (req, res) => {
  fileSystem.readFile('projectsData.json', (err, data) => {
    if(err) throw err;
    let dataArr = JSON.parse(data);
    if(req.query.id){
      const repository = dataArr.find(repository => repository.id === parseInt(req.query.id));
      if(!repository){
        return res.status(404).send("That repository doesn't exist");
      }
      return res.send(repository);
    }
    return res.json(dataArr);
  })
});

app.post('/api/repositories/new', (req, res) => {
  let dataArr;
  fileSystem.readFile('projectsData.json', (err, data) => {
    if(err) throw err;
    dataArr = JSON.parse(data);
    console.log(`😜`, req.body);

    const {name, description, url, website_url, topics, branches, commits, has_license, has_readme} = req.body;
    if(!name || !description || !url || !website_url || !topics || !branches || !commits || !has_license || !has_readme){
      return res.status(400).send('All fields i.e name, description, url, website_url, topics, branches, commits, has_license, has_readme are required.')
    }
    dataArr.push({
      id: dataArr.length + 1,
      name,
      description,
      url,
      website_url,
      topics,
      branches,
      commits,
      has_license,
      has_readme
    });

    fileSystem.writeFile('projectsData.json', JSON.stringify(dataArr, null, 2), (err) => {
      if(err) throw err;
      return res.status(201).send('New repository has been added to the list.')
    })
  });
});

app.put('/api/repository', (req, res) => {
  fileSystem.readFile('projectsData.json', (err, data) => {
    if(err) throw err;
    let dataArr = JSON.parse(data);
    if(req.query.id){
      const repository = dataArr.find(repository => repository.id === parseInt(req.query.id));
      repository.name = req.body.name;
      repository.description = req.body.description;
      fileSystem.writeFile('projectsData.json', JSON.stringify(dataArr, null, 2), (err) => {
        if(err) throw err;
        return res.send(`Repository ${repository.id} updated`)
      });
    }
  });
});

app.delete('/api/repository', (req, res) => {
  fileSystem.readFile('projectsData.json', (err, data) => {
    if(err) throw err;
    let dataArr = JSON.parse(data);
    const repository = dataArr.find(repository => repository.id === parseInt(req.query.id));
    if(repository){
      dataArr.splice(dataArr.indexOf(repository), 1);
      fileSystem.writeFile('projectsData.json', JSON.stringify(dataArr, null, 2), (err) => {
        if(err) throw err;
        return res.send(`Repository ${repository.id} deleted.`)
      });
    }else{
      return res.send(`No repository with that id ${req.query.id} exists.`);
    }
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Sorry! Can’t find that resource. Please check your URL.')
});

app.listen(port, () => {
  console.log(`App server listening at https://localhost:${port}`)
});
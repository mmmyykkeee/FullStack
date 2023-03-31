const express = require('express')
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.json());
let textContent = 'T here will always be show stoppers on the way – that is live! An illness, a job loss, an accident, a burglary, a civil suit against you or a fire in your home are some of the things that could derail your well thought out plan and throw it into total disarray. Manage these risks that may interfere or stop you from executing your plan of action by arranging the right protection or insurances. While following a financial plan you need to ensure that the plan you decide on is followed. These are only basic strategies which if reviewed regularly and followed with discipline, will help you in achieving those financial goals. During our lifetime, we come across changes which affect our financial situation and needs – therefore, our financial goals should shift along with the situation to serve our biggest needs while focusing on where we want to be in the future.';

app.put('/api/text', (req, res) => {
  const newContent = req.body.content;
  textContent = newContent;
  res.json({ message: 'Text content updated successfully.' });
});

app.get('/api/text', (req, res) => {
  res.json({ content: textContent });
});

app.listen(5000, () => {
    console.log('Server started on port 5000!')
})
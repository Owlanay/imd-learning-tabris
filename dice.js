// This is a simple Tabris.js app. by MR. M. -  Feel free to modify as you please.

const {
  Button,
  TextView,
  ui,
  ImageView,
  AlertDialog,
  app, TextInput
} = require('tabris');

const IMAGE_PATH = 'https://mrmccormack.github.io/imd-learning-tabris/images/';
const MY_GITHUB_REPO = 'https://github.com/mrmccormack/imd-learning-tabris'

// global variables
let numWins = 0;

    var streakCounter01 = 0;
    var streakCounter02 = 0;
    var streakCounter03 = 0;
    var streakCounter04 = 0;
    var streakCounter05 = 0;
    var streakCounter06 = 0;

// Create a text input field with input finished listener

let userText = new TextInput({
  top: 20, left: '20%', right: '20%',
  message: 'Your name: '
}).on('accept', ({text}) => {
  new TextView({
    top: 'prev() 20', left: '20%',
    text: text
  }).appendTo(ui.contentView);
}).appendTo(ui.contentView);

let casinoimage = new ImageView({
  top: 'prev() 10',
  centerX: 0,
  image: IMAGE_PATH + 'casino.jpg'
}).appendTo(ui.contentView);

let button = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: 'Roll Dice'
  })

  .on('select', () => {
    casinoimage.height = 1;
    var rand = 1 + Math.floor(Math.random() * 6);
    console.log(rand);

      
    //**------------**
    //creating if statemnts to detect rolling the same number twice in a row
    //if/else staments checking for numbers (could maybe use case but not as familiar)
    if (rand == 1){
        streakCounter01 = streakCounter01 + 1;
        console.log("01 streak is at = " + streakCounter01);
        streakCounter02 = 0;
        streakCounter03 = 0;
        streakCounter04 = 0;
        streakCounter05 = 0;
        streakCounter06 = 0;
    } else if (rand == 2){
        streakCounter02 += 1;
        console.log("02 streak is at = " + streakCounter02);
        streakCounter01 = 0;
        streakCounter03 = 0;
        streakCounter04 = 0;
        streakCounter05 = 0;
        streakCounter06 = 0;
    } else if (rand == 3){
        streakCounter03 += 1;
        console.log("03 streak is at = " + streakCounter03);
        streakCounter01 = 0;
        streakCounter02 = 0;
        streakCounter04 = 0;
        streakCounter05 = 0;
        streakCounter06 = 0;
    } else if (rand == 4){
        streakCounter04 += 1;
        console.log("04 streak is at = " + streakCounter04);
        streakCounter01 = 0;
        streakCounter02 = 0;
        streakCounter03 = 0;
        streakCounter05 = 0;
        streakCounter06 = 0;
    } else if (rand == 5){
        streakCounter05 += 1;
        console.log("05 streak is at = " + streakCounter05);
        streakCounter01 = 0;
        streakCounter02 = 0;
        streakCounter03 = 0;
        streakCounter04 = 0;
        streakCounter06 = 0;
    } else if (rand == 6){
        streakCounter06 += 1;
        console.log("06 streak is at = " + streakCounter06);
        streakCounter01 = 0;
        streakCounter02 = 0;
        streakCounter03 = 0;
        streakCounter04 = 0;
        streakCounter06 = 0;
    } else {
        
    }

    //**-------------**
 
    image1.image = IMAGE_PATH + rand + '.png';

    if (rand == 6) {
      label.text = userText.text + '- WINNER, you got a 6';
      numWins = numWins + 1 ;
      winnerimage.image = IMAGE_PATH + 'winner.jpg';
    } else {
      label.text = userText.text  + ' - Try again- Wins so far ' + numWins;
      winnerimage.image = ''; 
    }

    if (numWins == 5){
      label.text = 'You WON with 5 wins!';
      image1.image = IMAGE_PATH + 'whitedice.png';
      winnerimage.image = '';
      numWins = 0;
    } else if (streakCounter01 == 2 
               || streakCounter02 == 2
               || streakCounter03 == 2 
               || streakCounter04 == 2
               || streakCounter05 == 2
               || streakCounter06 == 2){
        label.text = userText.text + "WINNER! You got two in a row!";
        image1.image = IMAGE_PATH + rand + '.png';
        winnerimage.image = IMAGE_PATH + 'winner.jpg';
        numWins = numWins + 1 ;
        streakCounter01 = 0;
        streakCounter02 = 0;
        streakCounter03 = 0;
        streakCounter04 = 0;
        streakCounter05 = 0;
        streakCounter06 = 0;
    } else {
        console.log("No winners this roll");
    }
    

  }).appendTo(ui.contentView);

// Create a text view and add it too
let label = new TextView({
  centerX: 0,
  top: 'prev() 10',
  font: '14px',
  text: 'Welcome to Mr. M. Casino'
}).appendTo(ui.contentView);

// Display images with different scale modes

let image1 = new ImageView({
  top: 'prev() 10',
  width: 100,
  height: 100,
  centerX: 0,
  scaleMode: 'fill',
  image: IMAGE_PATH + 'whitedice.png'

}).appendTo(ui.contentView);

let winnerimage = new ImageView({
  top: 'prev() 10',
  width: 100,
  height: 100,
  centerX: 0,
  scaleMode: 'fill',
  }).appendTo(ui.contentView);

  let resetbutton = new Button({
    centerX: 0,
    top: 'prev() 10',
    text: 'Reset'
  })
  .on('select', () => {
      casinoimage.height = 109;
      label.text = 'New Game';
      winnerimage.image = '';
      numWins = 0;
      image1.image = 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png';

  }).appendTo(ui.contentView);



new Button({
  left: 16, top: 'prev() 16', right: 16,
  text: '© INFO'
}).on('select', () => {
  new AlertDialog({
    message: '© 2018 Mr. M. - Free to use',
    buttons: {ok: 'OK'}
  }).open();
}).appendTo(ui.contentView);


  new Button({
  alignment: 'center', centerX: 0,  top: 'prev() 10',
  image: IMAGE_PATH + 'github32.png',
  font: '10px',
  text: 'View source code on my Github Repository'
}).on({
  select: () => app.launch(MY_GITHUB_REPO)
    .then(() => label.text = 'Url has been launched')
    .catch((e) => label.text = e)
}).appendTo(ui.contentView);

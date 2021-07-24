const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: 'account',  //Enter here your account login
	password: 'password1234'		 //Enter your password
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(1);                 //1 - online, 7 - invisible
	user.gamesPlayed([730,252950,271590,322330,1091500,105600,460930,311210,635260,252490,218620,620,304390,440,447040,49520,346110,240,261640,50,220,400,380,420,500,550,203160,10,80,100,130,280,320,340,360]);    //List app IDs
});
function hf_text(count) {
	var textblock = new Array
	textblock[1] = 'The signing of Cristiano Ronaldo on a new five-year, $31 million contract yesterday represented the best possible news for a buoyant Manchester United as they continue their quest for success on three fronts. But the ink had barely begun to dry when Sir Alex Ferguson angrily condemned Real Madrid’s attempts to unsettle a player he has challenged to follow in the footsteps of Pele and Diego Maradona.'
	textblock[2] = 'Ronaldo’s decision to sign a deal worth about $120,000 a week, making him the best-paid player in United’s history, came as a serious blow to Real, who had been encouraged to believe that the 22-year-old Portugal winger would join them in the summer. Those hopes are now over — for another year at least — but Ferguson’s delight did not stop him castigating the Spanish club for their part in the saga.'
	textblock[3] = '“I had no doubts Cristiano would sign, but I think everyone else outside Old Trafford had,” Ferguson, whose team take on Watford in the semi-finals of the FA Cup at Villa Park this evening, said. “In this case, I think there were some grounds for the speculation in that they [Real] keep talking in Spain and unsettling clubs like ourselves. They don’t have any regard for anyone but themselves when they decide to put their neck out for the best players in the world. They’ve shown that over the years.'
	bc = (((count<1)||(count>3))?1:count)
	for(t=1;t<=bc;t++) document.write("<p>" + textblock[t] + "</p>\n")
	return true
}

function hf_image(w,h) {
	document.write('<div class="image" style="width:' + w + 'px;height:' + h + 'px;"></div>' + "\n")
	return true
}
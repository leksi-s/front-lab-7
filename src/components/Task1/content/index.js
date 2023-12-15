import { Component } from 'react';

const generateRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

export default class Content extends Component {
  constructor () {
    super();
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(event) {
    const {target} = event;
    target.style.background = generateRandomColor();
    target.style.color = generateRandomColor();
  }

  render() {
    return (
        <div>
            <p>04.08.2004; місто Вишневе, Київська область</p>
<p>освіта: ЗОШ №2, м. Вишневе 
</p>
<p style={{textIndent: '53px'}}>НТУУ "КПІ ім. І.Сікорського" м. Київ</p>
<p>Хоббі:</p>
<ul>
<li>С#</li>
<li>Java</li>
<li>Читання книжок</li>
<li>FrontEnd</li>
</ul>
<p>Улюбенні фільми:</p>
<ol>
<li>"Drive"</li>
<li>"Dovbush"</li>
<li>"Barbie"</li>
</ol>
<p><strong>Київ</strong> -- столиця та найбільше місто України. 
    Розташований у середній течії Дніпра, у північній Наддніпрянщині. 
    Політичний, соціально-економічний, транспортний, освітньо-науковий, 
    історичний, культурний та духовний центр України. У системі 
    адміністративно-територіального устрою України Київ має спеціальний статус, 
    визначений Конституцією, і не входить до складу жодної області, хоча і є 
    адміністративним центром Київської області[8]. Місце розташування центральних 
    органів влади України, іноземних місій, штаб-квартир більшості підприємств і 
    громадських об'єднань, що працюють в Україні.</p>
    
    <a href="https://kyivcity.gov.ua" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/17-07-02-Maidan_Nezalezhnosti_RR74377-PANORAMA.jpg/413px-17-07-02-Maidan_Nezalezhnosti_RR74377-PANORAMA.jpg"/></a>
    </div> 
    );
  }
}

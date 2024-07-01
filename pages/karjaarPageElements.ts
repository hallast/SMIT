import { Selector, t } from "testcafe";


class karjaarPage {

  openPositionsLink: Selector;
  openPositionsHeader: Selector;
  esitaButton: Selector;
  applicationHeader: Selector; 
  
  constructor() { 

    
    this.openPositionsLink = Selector ('ul > li').withText("Vabad töökohad");
    this.openPositionsHeader = Selector('.title').withText("Vabad töökohad");
    this.esitaButton = Selector ('button.button-primary');
    this.applicationHeader = Selector ('span').withText("Liitu smitikatega!");

  }
}

export default new karjaarPage();


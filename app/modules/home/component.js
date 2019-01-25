class HomeController {
  constructor() {
  }
}

const template = `
    <div>
        <span>This is Home Component</span>
        <div>
            <a ui-sref="add-contact"> ADD </a>
        </div>
    </div>
`;

const HomeComponent = {
  template: template,
  selector: 'home',
  controllerAs: 'homeCtrl',
  controller: HomeController
}

export default HomeComponent;
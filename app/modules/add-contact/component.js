class AddContactController {
  constructor() {
  }
}

const template = `
    <div>
        <span>This is Add Contact Component</span>
    </div>
`;

const AddContactComponent = {
  template: template,
  selector: 'add-contact',
  controllerAs: 'addContactCtrl',
  controller: AddContactController
};

export default AddContactComponent;
import "./App.css";
import "./index.css";
import "./App.css";
import TextExpanded from "./components/TextExpanded/TextExpanded";

function App() {
  return (
    <div className="bg-blue-200 h-screen p-10">
      <TextExpanded collapseNumWords={30}>
        Reading practice to help you understand simple texts and find specific
        information in everyday material. Texts include emails, invitations,
        signs. practice to help you understand simple texts and find specific
        information in everyday material. Texts include emails, invitations,help
        you understand simple texts and find specific information in everyday
        material. Texts include emails, invitations
      </TextExpanded>
      <TextExpanded collapseNumWords={10} color="red" expandBtnText="Show text">
        Reading practice to help you understand simple texts and find specific
        information in everyday material. Texts include emails, invitations,
        personal messages, tips, notices and signs. help you understand simple
        texts and find specific information in everyday material. Texts include
        emails, invitations, personal messages, tips, notices and signs.
      </TextExpanded>
      <TextExpanded className="box" expanded={true}>
        Reading practice to help you understand simple texts and find specific
        information in everyday material. Texts include emails, invitations,
        personal messages, tips, notices and signs. help you understand simple
        texts and find specific information in everyday material. Texts include
        emails, invitations, personal messages, tips, notices and signs.
      </TextExpanded>
    </div>
  );
}

export default App;

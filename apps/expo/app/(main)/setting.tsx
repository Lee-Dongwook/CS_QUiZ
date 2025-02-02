import { Container } from "../../components/Container";
import { SettingScreen } from "app/features/settings/screen";
import { signOut } from "../../utils/auth";

export default function Setting() {
  return (
    <Container>
      <SettingScreen />
    </Container>
  );
}

import { Container } from "../../components/Container";
import { mockLectureData } from "app/features/lecture/lib/mockLectureData";
import LectureScreen from "app/features/lecture/screen";

export default function Lecture() {
  return (
    <Container>
      <LectureScreen lectures={mockLectureData} />
    </Container>
  );
}

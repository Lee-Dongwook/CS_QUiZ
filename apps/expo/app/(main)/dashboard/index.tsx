import DashboardScreen from "app/features/dashboard/screen";
import { Container } from "../../../components/Container";
import { SafeArea } from "app/provider/safe-area";
import axiosInstance from "app/api/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Dashboard() {
  return (
    <SafeArea>
      <Container>
        <DashboardScreen />
      </Container>
    </SafeArea>
  );
}

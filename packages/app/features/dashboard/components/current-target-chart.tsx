import { View, Text, useWindowDimensions, Pressable } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { Card } from "app/design/card";

interface CurrentTargetChartProps {
  data: any[];
  onPress: () => void;
}

const CurrentTargetChart = ({ data, onPress }: CurrentTargetChartProps) => {
  const { width } = useWindowDimensions();
  const CARD_PADDING = 40;
  const chartWidth = width - CARD_PADDING - 32;

  if (!data || data.length === 0) {
    return (
      <Card>
        <></>
      </Card>
    );
  }
};

export default CurrentTargetChart;

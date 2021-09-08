import React from "react";
import PropTypes from "prop-types";
import { Pie } from "@vx/shape";
import { Group } from "@vx/group";
import useDimensions from "react-use-dimensions";
import styled from "styled-components";
import { LegendItem, LegendLabel, LegendOrdinal } from "@vx/legend";
import { scaleOrdinal } from "@vx/scale";

const value = d => d.value;

const colors = [
  "#003f5c",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#d45087",
  "#f95d6a",
  "#ff7c43",
  "#ffa600"
];

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

const ChartWrapper = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default function PieChart({ data, label }) {
  const [ref, { width, height }] = useDimensions();
  const yxMin = Math.min(height === 0 ? width : height, width);
  const centerY = yxMin / 2;
  const centerX = yxMin / 2;
  const radius = Math.min(width, height) / 2;
  const scale = scaleOrdinal({
    domain: data.map(browser => browser.key),
    range: colors
  });

  return (
    <ChartWrapper height={yxMin}>
      <div>
        <ChartWrapper>
          <svg ref={ref} style={{ width: "200px", height: "200px" }}>
            <Group top={centerY} left={centerX}>
              <text
                fill="white"
                x={0}
                y={0}
                fontSize={18}
                fontWeight={500}
                textAnchor="middle"
              >
                {label}
              </text>
              <Pie
                data={data}
                pieValue={value}
                outerRadius={radius * 0.9}
                innerRadius={radius * 0.75}
                startAngle={degreesToRadians(180)}
                endAngle={degreesToRadians(180 + 360)}
                padAngle={0.04}
              >
                {pie => {
                  return pie.arcs.map((arc, i) => {
                    return <PieArc pie={pie} arc={arc} key={i} />;
                  });
                }}
              </Pie>
            </Group>
          </svg>
          <LegendOrdinal
            direction="column"
            scale={scale}
            shape="rect"
            fill={({ datum }) => scale(datum)}
          >
            {labels => {
              return (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {labels.map((label, i) => {
                    return (
                      <LegendItem
                        key={`legend-quantile-${i}`}
                        margin={"0 5px"}
                        width="100%"
                      >
                        <LegendLabel align={"left"} margin={"0 0 0 4px"}>
                          <div
                            style={{
                              backgroundColor: label.value,
                              color: "white",
                              lineHeight: "16px",
                              fontSize: "10px",
                              borderRadius: "5px",
                              padding: "0 4px",
                              margin: "2px"
                            }}
                          >
                            {label.text}
                          </div>
                        </LegendLabel>
                      </LegendItem>
                    );
                  })}
                </div>
              );
            }}
          </LegendOrdinal>
        </ChartWrapper>
      </div>
    </ChartWrapper>
  );
}

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    })
  ).isRequired
};

// eslint-disable-next-line react/no-multi-comp
function PieArc({ arc, pie }) {
  const opacity = 1; // (i + 2);
  return (
    <g>
      <path d={pie.path(arc)} fill={colors[arc.index]} fillOpacity={opacity} />
    </g>
  );
}

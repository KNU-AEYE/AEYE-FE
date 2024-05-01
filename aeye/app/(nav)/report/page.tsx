"use server";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "time", headerName: "시간", width: 130 },
  { field: "description", headerName: "관제내용", width: 400 },
  { field: "video", headerName: "영상", width: 200 },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  // },
];

const rows = [
  {
    id: 1,
    time: "12:00",
    description:
      "[객체 이상행동 감지] 자동차 앞 유리에 물결 모양이 있고 후드에 찌그러진 부분이 있습니다. 건물 옆에 녹색 덤불 두 개가 있고 사람이 인도를 걷고 있습니다. 차량 번호판이 보이지 않습니다.",
    video: "road_cctv_1.mp4",
  },
  {
    id: 2,
    time: "00:00",
    description:
      "[객체 이상행동 감지] 이 이미지는 도시 길모퉁이의 야간 장면을 캡처합니다 . 길에는 인도를 걷는 한 사람을 제외하고는 보행자가 없습니다 .",
    video: "road_cctv_2.mp4",
  },
  {
    id: 3,
    time: "13:10",
    description:
      "[객체 이상행동 감지] 차분한 파란색으로 칠해진 이 집은 마치 관람객을 환영하듯 활짝 열려 있는 대문이 특징입니다. 이미지 오른쪽에는 나무가 우뚝 서 있고 잎사귀가 바람에 바스락거리며 여기저기 구름이 흩어져 있어 그림 같은 장면을 완성합니다.",
    video: "road_cctv_3.mp4",
  },
  {
    id: 4,
    time: "12:49",
    description:
      "[새 객체 감지] 이 이미지는 길가에 주차된 자동차를 내려다보는 다른 시점의 장면을 캡처한 것입니다. SUV로 보이는 이 자동차는 갈색이며 지붕에 움푹 들어간 부분이 보입니다. 건물 옆 인도를 걷고 있는 사람이 보입니다.",
    video: "road_cctv_4.mp4",
  },
  {
    id: 5,
    time: "05:00",
    description:
      "[객체 이상행동 감지] 이 이미지는 거리에서 건물 앞에 주차된 자동차를 내려다보는 장면을 캡처한 것으로, 운전석 쪽 문이 눈에 띄게 찌그러진 어두운 세단인 자동차가 프레임 왼쪽에 위치하고 있고 사람이 그 앞을 지나가고 있습니다.",
    video: "road_cctv_5.mp4",
  },
  {
    id: 6,
    time: "40:17",
    description:
      "[객체 이상행동 감지] 이 이미지는 밤의 한적한 교외 길모퉁이를 포착한 것입니다. 길은 한산하고 프레임 오른쪽에 있는 집의 진입로에 자동차 한 대가 주차되어 있습니다. 집 자체는 어둡기 때문에 주민들이 자고 있거나 외출했을 가능성이 높습니다.",
    video: "road_cctv_5.mp4",
  },
];

function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default async function Report() {
  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom>
          관제일지
        </Typography>
        <Typography variant="h6" gutterBottom>
          {formattedDate}
        </Typography>
      </Box>
      <DataTable />
    </>
  );
}

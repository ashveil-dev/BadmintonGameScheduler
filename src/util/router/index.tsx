import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "page/layout"
import HomePage from "page/home"
import CompetitionPage from "page/competition"
import ClubPage from "page/club"
import TeamPage from "page/team"
import SchedulePage from "page/schedule"

const router = createBrowserRouter([
  {
    path: "/BadmintonGameScheduler",
    element: <Layout />,
    children: [
      {
        path: "/BadmintonGameScheduler",
        element: <HomePage />,
      },
      {
        path: "/BadmintonGameScheduler/competition",
        element: <CompetitionPage />,
      },
      {
        path: "/BadmintonGameScheduler/club",
        element: <ClubPage />,
      },
      {
        path: "/BadmintonGameScheduler/team",
        element: <TeamPage />,
      },
      {
        path: "/BadmintonGameScheduler/schedule",
        element: <SchedulePage />,
      },
    ],
  },
])

function RouterProviderHoc(): JSX.Element {
  return <RouterProvider router={router} />
}
export default RouterProviderHoc

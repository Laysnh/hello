import { Navigate, Route, Routes } from 'react-router-dom';
import { ComingSoonPage } from '../pages/ComingSoonPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AppLayout } from '../layouts/AppLayout';
import { routePaths } from './routePaths';

const pendingRoutes = [
  [routePaths.staffMeetings, 'Réunions Staff'],
  [routePaths.expandedStaffMeetings, 'Réunions Staff élargie'],
  [routePaths.paiAntsirabe, 'PAI Antsirabe'],
  [routePaths.personnel, 'Gestion du personnel'],
  [routePaths.sneri, 'SNERI'],
  [routePaths.earlyWarning, 'Early Warning'],
  [routePaths.projects, 'Projets'],
  [routePaths.stock, 'Gestion du stock'],
  [routePaths.reports, 'Rapports'],
] as const;

export function AppRouter() {
  return <Routes><Route path="/" element={<Navigate to={routePaths.login} replace />} /><Route path={routePaths.login} element={<LoginPage />} /><Route element={<AppLayout />}><Route path={routePaths.dashboard} element={<DashboardPage />} />{pendingRoutes.map(([path, title]) => <Route key={path} path={path} element={<ComingSoonPage title={title} />} />)}</Route><Route path="*" element={<NotFoundPage />} /></Routes>;
}

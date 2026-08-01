import NavigateNextRounded from '@mui/icons-material/NavigateNextRounded';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { navigationItems } from '../../config/navigation';
import { routePaths } from '../../routes/routePaths';

export function AppBreadcrumbs() {
  const { pathname } = useLocation();
  const current = navigationItems.find((item) => item.path === pathname)?.label ?? 'Page';
  return <Breadcrumbs aria-label="Fil d’Ariane" separator={<NavigateNextRounded fontSize="small" />} sx={{ mb: 2.5 }}><Link component={RouterLink} to={routePaths.dashboard} color="text.secondary" underline="hover">Accueil</Link><Typography color="text.primary" fontWeight={600}>{current}</Typography></Breadcrumbs>;
}

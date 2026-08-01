import ConstructionRounded from '@mui/icons-material/ConstructionRounded';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/common/PageContainer';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { StatusBadge } from '../components/common/StatusBadge';
import { routePaths } from '../routes/routePaths';

interface ComingSoonPageProps { title: string; description?: string; }

/** Shared placeholder used until each operational module is implemented. */
export function ComingSoonPage({ title, description = 'Ce module sera disponible dans une prochaine étape de la plateforme.' }: ComingSoonPageProps) {
  const navigate = useNavigate();
  return <PageContainer maxWidth="lg"><Stack sx={{ minHeight: '75vh' }} alignItems="center" justifyContent="center"><Card sx={{ width: '100%', maxWidth: 680 }}><CardContent sx={{ p: { xs: 3, md: 6 }, textAlign: 'center' }}><ConstructionRounded color="primary" sx={{ fontSize: 64 }} /><Stack alignItems="center" spacing={2} mt={2}><StatusBadge label="En préparation" tone="info" /><Typography variant="h2" component="h1">{title}</Typography><Typography color="text.secondary" sx={{ maxWidth: 500 }}>{description}</Typography><PrimaryButton startIcon={<DashboardRounded />} onClick={() => navigate(routePaths.dashboard)} sx={{ mt: 1 }}>Retour au tableau de bord</PrimaryButton></Stack></CardContent></Card></Stack></PageContainer>;
}

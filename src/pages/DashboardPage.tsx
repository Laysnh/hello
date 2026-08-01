import LogoutRounded from '@mui/icons-material/LogoutRounded';
import { Avatar, Box, Card, CardContent, Chip, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/common/PageContainer';
import { PageHeader } from '../components/common/PageHeader';
import { SecondaryButton } from '../components/common/SecondaryButton';
import { dashboardKpis, upcomingModules } from '../mock/dashboardData';
import { routePaths } from '../routes/routePaths';

export function DashboardPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box component="nav" aria-label="Navigation principale" sx={{ bgcolor: 'primary.main', color: 'white', py: 1.5 }}><PageContainer><Stack direction="row" justifyContent="space-between" alignItems="center"><Stack direction="row" alignItems="center" spacing={1.5}><Avatar sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 800 }}>B</Avatar><Box><Typography fontFamily="Poppins" fontWeight={700}>BNGRC</Typography><Typography variant="caption" sx={{ opacity: 0.78 }}>Espace de démonstration</Typography></Box></Stack><Chip label="Données fictives" size="small" sx={{ bgcolor: 'rgba(255,255,255,.15)', color: 'white', display: { xs: 'none', sm: 'flex' } }} /></Stack></PageContainer></Box>
      <PageContainer>
        <PageHeader title="Tableau de bord" description="Bienvenue sur l'espace de coordination du BNGRC." action={<SecondaryButton startIcon={<LogoutRounded />} onClick={() => navigate(routePaths.login)}>Se déconnecter</SecondaryButton>} />
        <Grid container spacing={2.5}>
          {dashboardKpis.map((kpi, index) => { const Icon = kpi.icon; return <Grid key={kpi.label} size={{ xs: 12, sm: 6, lg: 3 }}><motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }}><Card><CardContent sx={{ p: 3 }}><Stack direction="row" justifyContent="space-between" alignItems="flex-start"><Box><Typography color="text.secondary" fontWeight={600}>{kpi.label}</Typography><Typography variant="h2" sx={{ mt: 1 }}>{kpi.value}</Typography><Typography variant="caption" color="text.secondary">{kpi.detail}</Typography></Box><Avatar variant="rounded" sx={{ bgcolor: `${kpi.color}14`, color: kpi.color, width: 50, height: 50 }}><Icon /></Avatar></Stack></CardContent></Card></motion.div></Grid>; })}
        </Grid>
        <Card sx={{ mt: 4 }}><CardContent sx={{ p: { xs: 3, md: 4 } }}><Typography variant="h3">Modules en préparation</Typography><Typography color="text.secondary" sx={{ mt: 0.75, mb: 3 }}>Le socle technique est prêt à accueillir progressivement les fonctionnalités opérationnelles.</Typography><Grid container spacing={2}>{upcomingModules.map((module) => <Grid key={module} size={{ xs: 12, sm: 6, md: 3 }}><Box sx={{ p: 2, minHeight: 76, borderRadius: 2, bgcolor: 'primary.light', color: 'primary.dark', display: 'flex', alignItems: 'center', fontWeight: 700 }}>{module}</Box></Grid>)}</Grid></CardContent></Card>
      </PageContainer>
    </Box>
  );
}

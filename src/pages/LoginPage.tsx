import AccountBalanceRounded from '@mui/icons-material/AccountBalanceRounded';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import LockOutlineRounded from '@mui/icons-material/LockOutlineRounded';
import MapRounded from '@mui/icons-material/MapRounded';
import PersonOutlineRounded from '@mui/icons-material/PersonOutlineRounded';
import RadarRounded from '@mui/icons-material/RadarRounded';
import { Alert, Box, InputAdornment, Link, Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { routePaths } from '../routes/routePaths';

interface LoginForm { username: string; password: string; }

export function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({ defaultValues: { username: '', password: '' } });
  const submit = () => navigate(routePaths.dashboard);

  return (
    <Box component="main" sx={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(480px, 0.9fr) 1.1fr' }, bgcolor: 'background.paper' }}>
      <Stack justifyContent="center" sx={{ p: { xs: 2.5, sm: 6, lg: 10 }, order: { xs: 2, md: 1 } }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <Box sx={{ maxWidth: 520, mx: 'auto', width: '100%' }}>
            <Stack direction="row" alignItems="center" spacing={1.5} mb={4}><Box aria-label="Emplacement du logo BNGRC" sx={{ width: 58, height: 58, bgcolor: 'primary.main', color: 'white', borderRadius: 2, display: 'grid', placeItems: 'center' }}><AccountBalanceRounded fontSize="large" /></Box><Box><Typography variant="h4" color="primary.main">BNGRC</Typography><Typography variant="caption" color="text.secondary">Madagascar</Typography></Box></Stack>
            <Typography variant="h2" component="h1">Plateforme numérique du BNGRC</Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5, mb: 3 }}>Coordonnez, suivez et anticipez les actions de gestion des risques.</Typography>
            <Alert severity="info" sx={{ mb: 3 }}>Version de démonstration — utilisez des identifiants fictifs.</Alert>
            <Box component="form" noValidate onSubmit={handleSubmit(submit)}>
              <Stack spacing={2.25}>
                <TextField label="Direction / Utilisateur" autoComplete="username" autoFocus error={Boolean(errors.username)} helperText={errors.username?.message} slotProps={{ input: { startAdornment: <InputAdornment position="start"><PersonOutlineRounded /></InputAdornment> } }} {...register('username', { required: 'Veuillez renseigner un utilisateur.' })} />
                <TextField label="Mot de passe" type="password" autoComplete="current-password" error={Boolean(errors.password)} helperText={errors.password?.message} slotProps={{ input: { startAdornment: <InputAdornment position="start"><LockOutlineRounded /></InputAdornment> } }} {...register('password', { required: 'Veuillez renseigner un mot de passe.', minLength: { value: 4, message: 'Le mot de passe doit contenir au moins 4 caractères.' } })} />
                <Box textAlign="right"><Link component="button" type="button" underline="hover" onClick={() => undefined}>Mot de passe oublié ?</Link></Box>
                <PrimaryButton type="submit" size="large" loading={isSubmitting} endIcon={<ArrowForwardRounded />}>Se connecter</PrimaryButton>
              </Stack>
            </Box>
          </Box>
        </motion.div>
      </Stack>
      <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: { xs: 270, md: '100vh' }, order: { xs: 1, md: 2 }, bgcolor: '#00457E', background: 'linear-gradient(145deg, #003C70 0%, #005DAA 55%, #1E88E5 100%)', color: 'white', p: { xs: 3, sm: 6, lg: 9 }, display: 'flex', alignItems: 'flex-end' }}>
        <Box aria-hidden sx={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundImage: 'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)', backgroundSize: '54px 54px', transform: 'rotate(-8deg) scale(1.2)' }} />
        <RadarRounded aria-hidden sx={{ position: 'absolute', right: '10%', top: '14%', fontSize: { xs: 150, md: 250 }, opacity: 0.16 }} />
        <Stack spacing={2} sx={{ position: 'relative', maxWidth: 630 }}><Stack direction="row" spacing={1.5}><MapRounded sx={{ fontSize: 34 }} /><Typography variant="overline" fontWeight={700} letterSpacing={2}>Coordination nationale</Typography></Stack><Typography variant="h1">Une vision partagée pour mieux protéger.</Typography><Typography sx={{ opacity: 0.88, fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 560 }}>Centraliser l'information, faciliter la coordination des secours et renforcer la résilience face aux catastrophes.</Typography></Stack>
      </Box>
    </Box>
  );
}

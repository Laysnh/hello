import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/common/PageContainer';
import { PrimaryButton } from '../components/common/PrimaryButton';

export function NotFoundPage() {
  const navigate = useNavigate();
  return <PageContainer maxWidth="lg"><Typography variant="h1" mt={8}>404</Typography><Typography variant="h3" mt={2}>Page introuvable</Typography><Typography color="text.secondary" my={2}>La page demandée n'existe pas ou a été déplacée.</Typography><PrimaryButton onClick={() => navigate('/login')}>Revenir à l'accueil</PrimaryButton></PageContainer>;
}

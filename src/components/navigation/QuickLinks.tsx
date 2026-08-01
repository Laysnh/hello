import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { quickLinks } from '../../config/navigation';

export function QuickLinks() {
  const navigate = useNavigate();
  return <Box component="aside" aria-label="Liens rapides" sx={{ mb: 3 }}><Typography variant="overline" color="text.secondary" fontWeight={700}>Accès rapides</Typography><Stack direction="row" spacing={1.25} sx={{ mt: 1, overflowX: 'auto', pb: 1 }}>{quickLinks.map((item, index) => { const Icon = item.icon; return <motion.div key={item.path} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}><ButtonBase onClick={() => navigate(item.path)} sx={{ minWidth: 180, minHeight: 52, px: 2, justifyContent: 'flex-start', gap: 1.25, border: '1px solid', borderColor: 'divider', borderRadius: 2, bgcolor: 'background.paper', color: 'text.primary', '&:hover': { borderColor: 'primary.main', color: 'primary.main' } }}><Icon fontSize="small" /><Typography variant="body2" fontWeight={700} whiteSpace="nowrap">{item.label}</Typography><ArrowForwardRounded sx={{ ml: 'auto', fontSize: 17 }} /></ButtonBase></motion.div>; })}</Stack></Box>;
}

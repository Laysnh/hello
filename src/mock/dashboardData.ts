import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleOutlineRounded from '@mui/icons-material/CheckCircleOutlineRounded';
import NotificationsActiveRounded from '@mui/icons-material/NotificationsActiveRounded';
import PendingActionsRounded from '@mui/icons-material/PendingActionsRounded';

export const dashboardKpis = [
  { label: 'Réunions prévues', value: '08', detail: 'Cette semaine', color: '#005DAA', icon: CalendarMonthRounded },
  { label: 'Décisions en attente', value: '12', detail: 'À examiner', color: '#ED6C02', icon: PendingActionsRounded },
  { label: 'Actions en cours', value: '24', detail: 'Suivi opérationnel', color: '#2E7D32', icon: CheckCircleOutlineRounded },
  { label: 'Alertes actives', value: '03', detail: 'Données fictives', color: '#D32F2F', icon: NotificationsActiveRounded },
];

export const upcomingModules = ['Réunions & décisions', 'Gestion du personnel', 'Early Warning', 'Projets & rapports'];

// assets
import { IconCash, IconBusinessplan } from '@tabler/icons';

// constant
const icons = {
    IconCash,
    IconBusinessplan
};

// ==============================|| PAYMENTS MENU ITEMS ||============================== //

const payments = {
    id: 'payments',
    title: 'Payments',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'View Salary',
            type: 'item',
            url: '/payments/view-salary',
            icon: icons.IconCash,
            breadcrumbs: false
        }
    ]
};

export default payments;

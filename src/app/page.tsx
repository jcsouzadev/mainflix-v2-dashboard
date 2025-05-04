import { redirect } from 'next/navigation';

export default function DashboardPage() {
  redirect('/dashboard/principal');
}

export const metadata = {
  title: 'Dashboard Principal',
};
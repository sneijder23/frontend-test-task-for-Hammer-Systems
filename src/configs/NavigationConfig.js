import {
  DashboardOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  GiftOutlined,
  PictureOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  FileTextOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/dashboards`,
  title: 'Основные',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboards',
      path: `${APP_PREFIX_PATH}/dashboards`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-catalog',
      path: `${APP_PREFIX_PATH}/dashboards/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'dashboards-catalog-items',
          path: `${APP_PREFIX_PATH}/dashboards/catalog/items`,
          title: 'Товары',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'dashboards-catalog-cat',
          path: `${APP_PREFIX_PATH}/dashboards/catalog/cat`,
          title: 'Категории',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'dashboards-catalog-collection',
          path: `${APP_PREFIX_PATH}/dashboards/catalog/collection`,
          title: 'Коллекции',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'dashboards-catalog-combo',
          path: `${APP_PREFIX_PATH}/dashboards/catalog/combo`,
          title: 'Комбо',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'dashboards-orders',
      path: `${APP_PREFIX_PATH}/dashboards/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-clients',
      path: `${APP_PREFIX_PATH}/dashboards/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'dashboards-clients-list',
          path: `${APP_PREFIX_PATH}/dashboards/clients/list`,
          title: 'Список клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'dashboards-clients-group',
          path: `${APP_PREFIX_PATH}/dashboards/clients/group`,
          title: 'Группы клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'dashboards-planner',
      path: `${APP_PREFIX_PATH}/dashboards/planner`,
      title: 'Планировщик',
      icon: TableOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-banners',
      path: `${APP_PREFIX_PATH}/dashboards/banners`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-promo-code',
      path: `${APP_PREFIX_PATH}/dashboards/promo-code`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-offline-points',
      path: `${APP_PREFIX_PATH}/dashboards/offline-points`,
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'dashboards-offline-points-address',
          path: `${APP_PREFIX_PATH}/dashboards/offline-points/address`,
          title: 'Адреса',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'dashboards-offline-points-geofence',
          path: `${APP_PREFIX_PATH}/dashboards/offline-points/geofence`,
          title: 'Геозоны',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'dashboards-personal',
      path: `${APP_PREFIX_PATH}/dashboards/personal`,
      title: 'Сотрудники',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'dashboards-mailings',
      path: `${APP_PREFIX_PATH}/dashboards/mailings`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const sysNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'Системные',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-mobile-app',
      path: `${APP_PREFIX_PATH}/system/mobile-app`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...sysNavTree
]

export default navigationConfig;

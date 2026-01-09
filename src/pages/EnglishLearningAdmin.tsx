import { useState, useEffect } from 'react';
import {
  Users,
  BookOpen,
  Video,
  BarChart3,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  TrendingUp,
  Award,
  Plus,
  Edit,
  Trash2,
  Filter,
  Download,
  Upload,
  Eye,
  Clock,
  DollarSign,
  Mail,
  Phone,
  Save,
  // Globe,
  Moon,
  Sun,
  Lock,
  PlayCircle,
  X,
} from 'lucide-react';

export default function EnglishLearningAdmin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Modal states
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [detailItem, setDetailItem] = useState<any>(null);

  // Dark mode effect
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const stats = [
    { label: 'Tổng học viên', value: '2,847', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { label: 'Khóa học', value: '48', change: '+3', icon: BookOpen, color: 'bg-green-500' },
    { label: 'Bài học video', value: '342', change: '+28', icon: Video, color: 'bg-purple-500' },
    {
      label: 'Doanh thu tháng',
      value: '₫89M',
      change: '+18%',
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ];

  const recentStudents = [
    { id: 1, name: 'Nguyễn Văn An', level: 'B2', progress: 75, status: 'active' },
    { id: 2, name: 'Trần Thị Bình', level: 'A2', progress: 45, status: 'active' },
    { id: 3, name: 'Lê Hoàng Cường', level: 'C1', progress: 92, status: 'active' },
    { id: 4, name: 'Phạm Thị Dung', level: 'B1', progress: 60, status: 'inactive' },
    { id: 5, name: 'Hoàng Văn Em', level: 'A1', progress: 30, status: 'active' },
  ];

  const popularCourses = [
    { id: 1, name: 'English for Beginners', students: 456, rating: 4.8, revenue: '₫25M' },
    { id: 2, name: 'Business English', students: 328, rating: 4.9, revenue: '₫32M' },
    { id: 3, name: 'IELTS Preparation', students: 512, rating: 4.7, revenue: '₫45M' },
    { id: 4, name: 'Conversational English', students: 389, rating: 4.6, revenue: '₫18M' },
  ];

  // Demo data for Students page
  const [allStudents, setAllStudents] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn An',
      email: 'an.nguyen@email.com',
      phone: '0901234567',
      level: 'B2',
      progress: 75,
      status: 'active',
      joinDate: '2024-01-15',
      courses: 3,
    },
    {
      id: 2,
      name: 'Trần Thị Bình',
      email: 'binh.tran@email.com',
      phone: '0902345678',
      level: 'A2',
      progress: 45,
      status: 'active',
      joinDate: '2024-02-20',
      courses: 2,
    },
    {
      id: 3,
      name: 'Lê Hoàng Cường',
      email: 'cuong.le@email.com',
      phone: '0903456789',
      level: 'C1',
      progress: 92,
      status: 'active',
      joinDate: '2023-11-10',
      courses: 5,
    },
    {
      id: 4,
      name: 'Phạm Thị Dung',
      email: 'dung.pham@email.com',
      phone: '0904567890',
      level: 'B1',
      progress: 60,
      status: 'inactive',
      joinDate: '2024-03-05',
      courses: 2,
    },
    {
      id: 5,
      name: 'Hoàng Văn Em',
      email: 'em.hoang@email.com',
      phone: '0905678901',
      level: 'A1',
      progress: 30,
      status: 'active',
      joinDate: '2024-04-12',
      courses: 1,
    },
    {
      id: 6,
      name: 'Võ Thị Phương',
      email: 'phuong.vo@email.com',
      phone: '0906789012',
      level: 'B2',
      progress: 68,
      status: 'active',
      joinDate: '2024-01-28',
      courses: 3,
    },
    {
      id: 7,
      name: 'Đỗ Văn Giang',
      email: 'giang.do@email.com',
      phone: '0907890123',
      level: 'A2',
      progress: 52,
      status: 'active',
      joinDate: '2024-02-14',
      courses: 2,
    },
    {
      id: 8,
      name: 'Bùi Thị Hoa',
      email: 'hoa.bui@email.com',
      phone: '0908901234',
      level: 'C1',
      progress: 88,
      status: 'active',
      joinDate: '2023-12-20',
      courses: 4,
    },
  ]);

  // Demo data for Courses page
  const [allCourses, setAllCourses] = useState([
    {
      id: 1,
      name: 'English for Beginners',
      description: 'Khóa học tiếng Anh cơ bản cho người mới bắt đầu',
      students: 456,
      rating: 4.8,
      revenue: '₫25M',
      status: 'active',
      lessons: 24,
      duration: '48h',
      category: 'Cơ bản',
    },
    {
      id: 2,
      name: 'Business English',
      description: 'Tiếng Anh thương mại và giao tiếp công việc',
      students: 328,
      rating: 4.9,
      revenue: '₫32M',
      status: 'active',
      lessons: 30,
      duration: '60h',
      category: 'Thương mại',
    },
    {
      id: 3,
      name: 'IELTS Preparation',
      description: 'Luyện thi IELTS chuyên sâu',
      students: 512,
      rating: 4.7,
      revenue: '₫45M',
      status: 'active',
      lessons: 40,
      duration: '80h',
      category: 'Luyện thi',
    },
    {
      id: 4,
      name: 'Conversational English',
      description: 'Tiếng Anh giao tiếp hàng ngày',
      students: 389,
      rating: 4.6,
      revenue: '₫18M',
      status: 'active',
      lessons: 20,
      duration: '40h',
      category: 'Giao tiếp',
    },
    {
      id: 5,
      name: 'Advanced Grammar',
      description: 'Ngữ pháp nâng cao',
      students: 245,
      rating: 4.5,
      revenue: '₫15M',
      status: 'active',
      lessons: 28,
      duration: '56h',
      category: 'Ngữ pháp',
    },
    {
      id: 6,
      name: 'TOEIC Mastery',
      description: 'Chinh phục TOEIC 900+',
      students: 567,
      rating: 4.8,
      revenue: '₫38M',
      status: 'active',
      lessons: 35,
      duration: '70h',
      category: 'Luyện thi',
    },
  ]);

  // Demo data for Lessons/Videos page
  const [allLessons, setAllLessons] = useState([
    {
      id: 1,
      title: 'Introduction to English Basics',
      course: 'English for Beginners',
      duration: '15:30',
      views: 1234,
      likes: 89,
      status: 'published',
      uploadDate: '2024-01-10',
      thumbnail: '📹',
    },
    {
      id: 2,
      title: 'Business Meeting Skills',
      course: 'Business English',
      duration: '22:45',
      views: 856,
      likes: 67,
      status: 'published',
      uploadDate: '2024-01-15',
      thumbnail: '📹',
    },
    {
      id: 3,
      title: 'IELTS Writing Task 1',
      course: 'IELTS Preparation',
      duration: '28:20',
      views: 2341,
      likes: 145,
      status: 'published',
      uploadDate: '2024-01-20',
      thumbnail: '📹',
    },
    {
      id: 4,
      title: 'Daily Conversations',
      course: 'Conversational English',
      duration: '18:10',
      views: 987,
      likes: 72,
      status: 'published',
      uploadDate: '2024-02-01',
      thumbnail: '📹',
    },
    {
      id: 5,
      title: 'Grammar: Present Tense',
      course: 'Advanced Grammar',
      duration: '25:00',
      views: 1456,
      likes: 98,
      status: 'published',
      uploadDate: '2024-02-05',
      thumbnail: '📹',
    },
    {
      id: 6,
      title: 'TOEIC Listening Part 1',
      course: 'TOEIC Mastery',
      duration: '30:15',
      views: 1876,
      likes: 112,
      status: 'published',
      uploadDate: '2024-02-10',
      thumbnail: '📹',
    },
    {
      id: 7,
      title: 'Pronunciation Guide',
      course: 'English for Beginners',
      duration: '20:30',
      views: 654,
      likes: 45,
      status: 'draft',
      uploadDate: '2024-02-15',
      thumbnail: '📹',
    },
  ]);

  // CRUD Functions for Students
  const handleCreateStudent = (studentData: any) => {
    const newStudent = {
      ...studentData,
      id: Math.max(...allStudents.map((s: any) => s.id), 0) + 1,
      joinDate: new Date().toISOString().split('T')[0],
      progress: 0,
      courses: 0,
    };
    setAllStudents([...allStudents, newStudent]);
    setShowStudentModal(false);
    setEditingItem(null);
  };

  const handleUpdateStudent = (studentData: any) => {
    setAllStudents(
      allStudents.map((s: any) => (s.id === editingItem.id ? { ...s, ...studentData } : s)),
    );
    setShowStudentModal(false);
    setEditingItem(null);
  };

  const handleDeleteStudent = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa học viên này?')) {
      setAllStudents(allStudents.filter((s: any) => s.id !== id));
    }
  };

  const handleViewStudent = (student: any) => {
    setDetailItem(student);
    setShowDetailModal(true);
  };

  // CRUD Functions for Courses
  const handleCreateCourse = (courseData: any) => {
    const newCourse = {
      ...courseData,
      id: Math.max(...allCourses.map((c: any) => c.id), 0) + 1,
      students: 0,
      rating: 0,
      revenue: '₫0',
    };
    setAllCourses([...allCourses, newCourse]);
    setShowCourseModal(false);
    setEditingItem(null);
  };

  const handleUpdateCourse = (courseData: any) => {
    setAllCourses(
      allCourses.map((c: any) => (c.id === editingItem.id ? { ...c, ...courseData } : c)),
    );
    setShowCourseModal(false);
    setEditingItem(null);
  };

  const handleDeleteCourse = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa khóa học này?')) {
      setAllCourses(allCourses.filter((c: any) => c.id !== id));
    }
  };

  const handleViewCourse = (course: any) => {
    setDetailItem(course);
    setShowDetailModal(true);
  };

  // CRUD Functions for Lessons
  const handleCreateLesson = (lessonData: any) => {
    const newLesson = {
      ...lessonData,
      id: Math.max(...allLessons.map((l: any) => l.id), 0) + 1,
      views: 0,
      likes: 0,
      uploadDate: new Date().toISOString().split('T')[0],
      thumbnail: '📹',
    };
    setAllLessons([...allLessons, newLesson]);
    setShowLessonModal(false);
    setEditingItem(null);
  };

  const handleUpdateLesson = (lessonData: any) => {
    setAllLessons(
      allLessons.map((l: any) => (l.id === editingItem.id ? { ...l, ...lessonData } : l)),
    );
    setShowLessonModal(false);
    setEditingItem(null);
  };

  const handleDeleteLesson = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa bài học này?')) {
      setAllLessons(allLessons.filter((l: any) => l.id !== id));
    }
  };

  const handleViewLesson = (lesson: any) => {
    setDetailItem(lesson);
    setShowDetailModal(true);
  };

  // Open modal functions
  const openStudentModal = (student?: any) => {
    setEditingItem(student || null);
    setShowStudentModal(true);
  };

  const openCourseModal = (course?: any) => {
    setEditingItem(course || null);
    setShowCourseModal(true);
  };

  const openLessonModal = (lesson?: any) => {
    setEditingItem(lesson || null);
    setShowLessonModal(true);
  };

  return (
    <div className='flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors'>
      {/* Sidebar */}
      <div className='w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6 flex flex-col'>
        <div className='flex items-center gap-3 mb-8'>
          <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center'>
            <BookOpen className='text-blue-900' size={24} />
          </div>
          <div>
            <h1 className='text-xl font-bold'>EnglishHub</h1>
            <p className='text-xs text-blue-200'>Admin Panel</p>
          </div>
        </div>

        <nav className='space-y-2 flex-1'>
          {[
            { id: 'dashboard', icon: BarChart3, label: 'Tổng quan' },
            { id: 'students', icon: Users, label: 'Học viên' },
            { id: 'courses', icon: BookOpen, label: 'Khóa học' },
            { id: 'videos', icon: Video, label: 'Bài học' },
            { id: 'analytics', icon: TrendingUp, label: 'Thống kê' },
            { id: 'settings', icon: Settings, label: 'Cài đặt' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id ? 'bg-white text-blue-900 shadow-lg' : 'hover:bg-blue-700'
              }`}
            >
              <item.icon size={20} />
              <span className='font-medium'>{item.label}</span>
            </button>
          ))}
        </nav>

        <button className='w-full flex items-center gap-3 px-4 py-3 mt-auto hover:bg-blue-700 rounded-lg transition-all'>
          <LogOut size={20} />
          <span className='font-medium'>Đăng xuất</span>
        </button>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* Header */}
        <header className='bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 p-4 transition-colors'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4 flex-1'>
              <div className='relative flex-1 max-w-md'>
                <Search
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                  size={20}
                />
                <input
                  type='text'
                  placeholder='Tìm kiếm học viên, khóa học...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                />
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className='p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors'
                title={darkMode ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
              >
                {darkMode ? (
                  <Sun size={20} className='text-yellow-500' />
                ) : (
                  <Moon size={20} className='text-blue-500' />
                )}
              </button>
              <div className='relative'>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className='p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg relative transition-colors dark:text-white'
                >
                  <Bell size={20} />
                  <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
                </button>
                {showNotifications && (
                  <div className='absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 z-10 transition-colors'>
                    <h3 className='font-semibold mb-3 dark:text-white'>Thông báo mới</h3>
                    <div className='space-y-2'>
                      <div className='p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer transition-colors'>
                        <p className='text-sm font-medium dark:text-white'>Học viên mới đăng ký</p>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>5 phút trước</p>
                      </div>
                      <div className='p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer transition-colors'>
                        <p className='text-sm font-medium dark:text-white'>
                          Khóa học đạt 500 học viên
                        </p>
                        <p className='text-xs text-gray-500 dark:text-gray-400'>2 giờ trước</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className='flex items-center gap-3 pl-4 border-l border-gray-300 dark:border-gray-700'>
                <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold'>
                  AD
                </div>
                <div>
                  <p className='text-sm font-semibold dark:text-white'>Admin User</p>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>Quản trị viên</p>
                </div>
                <ChevronDown size={16} className='text-gray-400 dark:text-gray-500' />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className='flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900 transition-colors'>
          {activeTab === 'dashboard' && (
            <div className='space-y-6'>
              <div>
                <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-1'>
                  Tổng quan hệ thống
                </h2>
                <p className='text-gray-500 dark:text-gray-400'>Thống kê và hoạt động gần đây</p>
              </div>

              {/* Stats Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-all'
                  >
                    <div className='flex items-start justify-between'>
                      <div>
                        <p className='text-gray-500 dark:text-gray-400 text-sm mb-1'>
                          {stat.label}
                        </p>
                        <p className='text-3xl font-bold text-gray-800 dark:text-white'>
                          {stat.value}
                        </p>
                        <p className='text-green-500 text-sm mt-2 flex items-center gap-1'>
                          <TrendingUp size={14} />
                          {stat.change}
                        </p>
                      </div>
                      <div className={`${stat.color} p-3 rounded-lg`}>
                        <stat.icon className='text-white' size={24} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Students & Popular Courses */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Recent Students */}
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors'>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                      Học viên gần đây
                    </h3>
                    <button className='text-blue-600 dark:text-blue-400 text-sm hover:underline'>
                      Xem tất cả
                    </button>
                  </div>
                  <div className='space-y-3'>
                    {recentStudents.map((student) => (
                      <div
                        key={student.id}
                        className='flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors'
                      >
                        <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                            {student.name.split(' ').pop()?.[0]}
                          </div>
                          <div>
                            <p className='font-medium text-gray-800 dark:text-white'>
                              {student.name}
                            </p>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                              Trình độ: {student.level}
                            </p>
                          </div>
                        </div>
                        <div className='text-right'>
                          <div className='flex items-center gap-2'>
                            <div className='w-16 h-2 bg-gray-200 rounded-full overflow-hidden'>
                              <div
                                className='h-full bg-blue-500 rounded-full'
                                style={{ width: `${student.progress}%` }}
                              ></div>
                            </div>
                            <span className='text-sm font-medium text-gray-600'>
                              {student.progress}%
                            </span>
                          </div>
                          <span
                            className={`text-xs ${student.status === 'active' ? 'text-green-500' : 'text-gray-400'}`}
                          >
                            {student.status === 'active' ? 'Đang học' : 'Tạm nghỉ'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Courses */}
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors'>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
                      Khóa học phổ biến
                    </h3>
                    <button className='text-blue-600 dark:text-blue-400 text-sm hover:underline'>
                      Xem tất cả
                    </button>
                  </div>
                  <div className='space-y-3'>
                    {popularCourses.map((course) => (
                      <div
                        key={course.id}
                        className='p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors'
                      >
                        <div className='flex items-start justify-between mb-2'>
                          <div className='flex-1'>
                            <p className='font-medium text-gray-800 dark:text-white'>
                              {course.name}
                            </p>
                            <div className='flex items-center gap-4 mt-1'>
                              <span className='text-sm text-gray-500 flex items-center gap-1'>
                                <Users size={14} />
                                {course.students} học viên
                              </span>
                              <span className='text-sm text-yellow-500 flex items-center gap-1'>
                                <Award size={14} />
                                {course.rating}
                              </span>
                            </div>
                          </div>
                          <span className='font-semibold text-green-600'>{course.revenue}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white'>
                <h3 className='text-xl font-semibold mb-4'>Thao tác nhanh</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  <button
                    onClick={() => openStudentModal()}
                    className='bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-all'
                  >
                    <Users className='mb-2' size={24} />
                    <span className='text-sm font-medium'>Thêm học viên</span>
                  </button>
                  <button
                    onClick={() => openCourseModal()}
                    className='bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-all'
                  >
                    <BookOpen className='mb-2' size={24} />
                    <span className='text-sm font-medium'>Tạo khóa học</span>
                  </button>
                  <button
                    onClick={() => openLessonModal()}
                    className='bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-all'
                  >
                    <Video className='mb-2' size={24} />
                    <span className='text-sm font-medium'>Upload video</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className='bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-all'
                  >
                    <BarChart3 className='mb-2' size={24} />
                    <span className='text-sm font-medium'>Xem báo cáo</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Students Page */}
          {activeTab === 'students' && (
            <div className='space-y-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-1'>
                    Quản lý học viên
                  </h2>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Danh sách tất cả học viên trong hệ thống
                  </p>
                </div>
                <button
                  onClick={() => openStudentModal()}
                  className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  <Plus size={20} />
                  Thêm học viên
                </button>
              </div>

              {/* Filters */}
              <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                <div className='flex items-center gap-4'>
                  <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white'>
                    <Filter size={18} />
                    Lọc
                  </button>
                  <select className='px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'>
                    <option>Tất cả trạng thái</option>
                    <option>Đang học</option>
                    <option>Tạm nghỉ</option>
                  </select>
                  <select className='px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'>
                    <option>Tất cả trình độ</option>
                    <option>A1</option>
                    <option>A2</option>
                    <option>B1</option>
                    <option>B2</option>
                    <option>C1</option>
                    <option>C2</option>
                  </select>
                  <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white'>
                    <Download size={18} />
                    Xuất Excel
                  </button>
                </div>
              </div>

              {/* Students Table */}
              <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-colors'>
                <div className='overflow-x-auto'>
                  <table className='w-full'>
                    <thead className='bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                      <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                          Học viên
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                          Liên hệ
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                          Trình độ
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                          Tiến độ
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                          Khóa học
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                          Trạng thái
                        </th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                          Thao tác
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                      {allStudents.map((student) => (
                        <tr key={student.id} className='hover:bg-gray-50 dark:hover:bg-gray-700'>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='flex items-center gap-3'>
                              <div className='w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold'>
                                {student.name.split(' ').pop()?.[0]}
                              </div>
                              <div>
                                <p className='font-medium text-gray-900 dark:text-white'>
                                  {student.name}
                                </p>
                                <p className='text-sm text-gray-500 dark:text-gray-400'>
                                  {student.joinDate}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm'>
                              <p className='text-gray-900 dark:text-white flex items-center gap-2'>
                                <Mail size={14} className='text-gray-400 dark:text-gray-500' />
                                {student.email}
                              </p>
                              <p className='text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1'>
                                <Phone size={14} className='text-gray-400' />
                                {student.phone}
                              </p>
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <span className='px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800'>
                              {student.level}
                            </span>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='flex items-center gap-2'>
                              <div className='w-24 h-2 bg-gray-200 rounded-full overflow-hidden'>
                                <div
                                  className='h-full bg-blue-500 rounded-full'
                                  style={{ width: `${student.progress}%` }}
                                ></div>
                              </div>
                              <span className='text-sm font-medium text-gray-600'>
                                {student.progress}%
                              </span>
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            {student.courses} khóa học
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap'>
                            <span
                              className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                student.status === 'active'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {student.status === 'active' ? 'Đang học' : 'Tạm nghỉ'}
                            </span>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                            <div className='flex items-center gap-2'>
                              <button
                                onClick={() => handleViewStudent(student)}
                                className='text-blue-600 hover:text-blue-900'
                              >
                                <Eye size={18} />
                              </button>
                              <button
                                onClick={() => openStudentModal(student)}
                                className='text-green-600 hover:text-green-900'
                              >
                                <Edit size={18} />
                              </button>
                              <button
                                onClick={() => handleDeleteStudent(student.id)}
                                className='text-red-600 hover:text-red-900'
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between'>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Hiển thị 1-8 của 2,847 học viên
                  </p>
                  <div className='flex items-center gap-2'>
                    <button className='px-3 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'>
                      Trước
                    </button>
                    <button className='px-3 py-1 bg-blue-600 text-white dark:text-white rounded-lg'>
                      1
                    </button>
                    <button className='px-3 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'>
                      2
                    </button>
                    <button className='px-3 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'>
                      3
                    </button>
                    <button className='px-3 py-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'>
                      Sau
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Courses Page */}
          {activeTab === 'courses' && (
            <div className='space-y-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-1'>
                    Quản lý khóa học
                  </h2>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Tạo và quản lý các khóa học tiếng Anh
                  </p>
                </div>
                <button
                  onClick={() => openCourseModal()}
                  className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  <Plus size={20} />
                  Tạo khóa học
                </button>
              </div>

              {/* Course Stats */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Tổng khóa học</p>
                  <p className='text-2xl font-bold text-gray-800 dark:text-white'>48</p>
                </div>
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Đang hoạt động</p>
                  <p className='text-2xl font-bold text-green-600'>45</p>
                </div>
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Tổng học viên</p>
                  <p className='text-2xl font-bold text-blue-600'>2,847</p>
                </div>
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Doanh thu</p>
                  <p className='text-2xl font-bold text-orange-600'>₫173M</p>
                </div>
              </div>

              {/* Courses Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {allCourses.map((course) => (
                  <div
                    key={course.id}
                    className='bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow'
                  >
                    <div className='h-32 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl'>
                      <BookOpen size={48} />
                    </div>
                    <div className='p-5'>
                      <div className='flex items-start justify-between mb-2'>
                        <div className='flex-1'>
                          <h3 className='font-semibold text-lg text-gray-800 dark:text-white mb-1'>
                            {course.name}
                          </h3>
                          <p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
                            {course.description}
                          </p>
                        </div>
                        <span className='px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800'>
                          {course.category}
                        </span>
                      </div>
                      <div className='space-y-2 mb-4'>
                        <div className='flex items-center justify-between text-sm'>
                          <span className='text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                            <Users size={14} />
                            Học viên
                          </span>
                          <span className='font-medium dark:text-gray-400'>{course.students}</span>
                        </div>
                        <div className='flex items-center justify-between text-sm'>
                          <span className='text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                            <Video size={14} />
                            Bài học
                          </span>
                          <span className='font-medium dark:text-gray-400'>{course.lessons}</span>
                        </div>
                        <div className='flex items-center justify-between text-sm'>
                          <span className='text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                            <Clock size={14} />
                            Thời lượng
                          </span>
                          <span className='font-medium dark:text-gray-400'>{course.duration}</span>
                        </div>
                        <div className='flex items-center justify-between text-sm'>
                          <span className='text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                            <Award size={14} />
                            Đánh giá
                          </span>
                          <span className='font-medium text-yellow-500 dark:text-yellow-400'>
                            {course.rating} ⭐
                          </span>
                        </div>
                        <div className='flex items-center justify-between text-sm'>
                          <span className='text-gray-500 dark:text-gray-400 flex items-center gap-1'>
                            <DollarSign size={14} />
                            Doanh thu
                          </span>
                          <span className='font-semibold text-green-600 dark:text-green-400'>
                            {course.revenue}
                          </span>
                        </div>
                      </div>
                      <div className='flex items-center gap-2 pt-4 border-t border-gray-200'>
                        <button
                          onClick={() => handleViewCourse(course)}
                          className='flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                        >
                          <Eye size={16} />
                          Xem
                        </button>
                        <button
                          onClick={() => openCourseModal(course)}
                          className='flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteCourse(course.id)}
                          className='flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lessons/Videos Page */}
          {activeTab === 'videos' && (
            <div className='space-y-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-1'>
                    Quản lý bài học
                  </h2>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Upload và quản lý video bài học
                  </p>
                </div>
                <button
                  onClick={() => openLessonModal()}
                  className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  <Upload size={20} />
                  Upload video
                </button>
              </div>

              {/* Video Stats */}
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Tổng video</p>
                  <p className='text-2xl font-bold text-gray-800 dark:text-white'>342</p>
                </div>
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Đã xuất bản</p>
                  <p className='text-2xl font-bold text-green-600'>328</p>
                </div>
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Tổng lượt xem</p>
                  <p className='text-2xl font-bold text-blue-600'>125K</p>
                </div>
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Tổng lượt thích</p>
                  <p className='text-2xl font-bold text-red-600'>8.9K</p>
                </div>
              </div>

              {/* Filters */}
              <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                <div className='flex items-center gap-4'>
                  <button className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white'>
                    <Filter size={18} />
                    Lọc
                  </button>
                  <select className='px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'>
                    <option>Tất cả khóa học</option>
                    {allCourses.map((course) => (
                      <option key={course.id}>{course.name}</option>
                    ))}
                  </select>
                  <select className='px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'>
                    <option>Tất cả trạng thái</option>
                    <option>Đã xuất bản</option>
                    <option>Bản nháp</option>
                  </select>
                </div>
              </div>

              {/* Videos List */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {allLessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className='bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow'
                  >
                    <div className='relative h-40 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center'>
                      <PlayCircle size={48} className='text-white opacity-80' />
                      <div className='absolute bottom-2 right-2 bg-black/70 dark:bg-white/70 text-white dark:text-black text-xs px-2 py-1 rounded'>
                        {lesson.duration}
                      </div>
                      {lesson.status === 'draft' && (
                        <div className='absolute top-2 right-2 bg-yellow-500 text-white dark:text-black text-xs px-2 py-1 rounded'>
                          Bản nháp
                        </div>
                      )}
                    </div>
                    <div className='p-4'>
                      <h3 className='font-semibold text-gray-800 dark:text-white mb-1 line-clamp-2'>
                        {lesson.title}
                      </h3>
                      <p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
                        {lesson.course}
                      </p>
                      <div className='flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4'>
                        <div className='flex items-center gap-4'>
                          <span className='flex items-center gap-1'>
                            <Eye size={14} />
                            {lesson.views.toLocaleString()}
                          </span>
                          <span className='flex items-center gap-1'>
                            <Award size={14} />
                            {lesson.likes}
                          </span>
                        </div>
                        <span className='text-xs'>{lesson.uploadDate}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <button
                          onClick={() => handleViewLesson(lesson)}
                          className='flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
                        >
                          <PlayCircle size={16} />
                          Xem
                        </button>
                        <button
                          onClick={() => openLessonModal(lesson)}
                          className='flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteLesson(lesson.id)}
                          className='flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analytics/Statistics Page */}
          {activeTab === 'analytics' && (
            <div className='space-y-6'>
              <div>
                <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-1'>
                  Thống kê & Phân tích
                </h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  Báo cáo chi tiết về hoạt động và hiệu suất
                </p>
              </div>

              {/* Time Range Selector */}
              <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 transition-colors'>
                <div className='flex items-center gap-4'>
                  <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Khoảng thời gian:
                  </span>
                  <button className='px-4 py-2 bg-blue-600 text-white dark:text-white rounded-lg text-sm'>
                    7 ngày
                  </button>
                  <button className='px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white'>
                    30 ngày
                  </button>
                  <button className='px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white'>
                    90 ngày
                  </button>
                  <button className='px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white'>
                    1 năm
                  </button>
                </div>
              </div>

              {/* Key Metrics */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <div className='bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white'>
                  <div className='flex items-center justify-between mb-4'>
                    <Users size={32} className='opacity-80' />
                    <span className='text-sm bg-white/20 px-2 py-1 rounded'>+12%</span>
                  </div>
                  <p className='text-blue-100 text-sm mb-1'>Học viên mới</p>
                  <p className='text-3xl font-bold'>342</p>
                  <p className='text-blue-100 text-xs mt-2'>Tháng này</p>
                </div>
                <div className='bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white'>
                  <div className='flex items-center justify-between mb-4'>
                    <TrendingUp size={32} className='opacity-80' />
                    <span className='text-sm bg-white/20 px-2 py-1 rounded'>+18%</span>
                  </div>
                  <p className='text-green-100 text-sm mb-1'>Doanh thu</p>
                  <p className='text-3xl font-bold'>₫89M</p>
                  <p className='text-green-100 text-xs mt-2'>Tháng này</p>
                </div>
                <div className='bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white'>
                  <div className='flex items-center justify-between mb-4'>
                    <Video size={32} className='opacity-80' />
                    <span className='text-sm bg-white/20 px-2 py-1 rounded'>+28</span>
                  </div>
                  <p className='text-purple-100 text-sm mb-1'>Video mới</p>
                  <p className='text-3xl font-bold'>28</p>
                  <p className='text-purple-100 text-xs mt-2'>Tháng này</p>
                </div>
                <div className='bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white'>
                  <div className='flex items-center justify-between mb-4'>
                    <Award size={32} className='opacity-80' />
                    <span className='text-sm bg-white/20 px-2 py-1 rounded'>4.8</span>
                  </div>
                  <p className='text-orange-100 text-sm mb-1'>Đánh giá TB</p>
                  <p className='text-3xl font-bold'>4.8</p>
                  <p className='text-orange-100 text-xs mt-2'>Từ học viên</p>
                </div>
              </div>

              {/* Charts Section */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Revenue Chart */}
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-4'>Doanh thu theo tháng</h3>
                  <div className='h-64 flex items-end justify-between gap-2'>
                    {[65, 78, 82, 75, 89, 95, 88].map((value, idx) => (
                      <div key={idx} className='flex-1 flex flex-col items-center'>
                        <div
                          className='w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg mb-2'
                          style={{ height: `${value}%` }}
                        ></div>
                        <span className='text-xs text-gray-500'>T{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Growth Chart */}
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-4'>Tăng trưởng học viên</h3>
                  <div className='h-64 flex items-end justify-between gap-2'>
                    {[45, 52, 48, 61, 68, 75, 72].map((value, idx) => (
                      <div key={idx} className='flex-1 flex flex-col items-center'>
                        <div
                          className='w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg mb-2'
                          style={{ height: `${value}%` }}
                        ></div>
                        <span className='text-xs text-gray-500'>T{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Courses & Top Students */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Top Courses */}
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-4'>Top khóa học</h3>
                  <div className='space-y-4'>
                    {allCourses.slice(0, 5).map((course, idx) => (
                      <div key={course.id} className='flex items-center gap-4'>
                        <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold'>
                          {idx + 1}
                        </div>
                        <div className='flex-1'>
                          <p className='font-medium text-gray-800'>{course.name}</p>
                          <p className='text-sm text-gray-500'>{course.students} học viên</p>
                        </div>
                        <span className='font-semibold text-green-600'>{course.revenue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Students */}
                <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-4'>Học viên xuất sắc</h3>
                  <div className='space-y-4'>
                    {allStudents
                      .sort((a, b) => b.progress - a.progress)
                      .slice(0, 5)
                      .map((student, idx) => (
                        <div key={student.id} className='flex items-center gap-4'>
                          <div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold'>
                            {idx + 1}
                          </div>
                          <div className='w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-sm'>
                            {student.name.split(' ').pop()?.[0]}
                          </div>
                          <div className='flex-1'>
                            <p className='font-medium text-gray-800'>{student.name}</p>
                            <p className='text-sm text-gray-500'>Trình độ: {student.level}</p>
                          </div>
                          <div className='text-right'>
                            <p className='font-semibold text-blue-600'>{student.progress}%</p>
                            <p className='text-xs text-gray-500'>{student.courses} khóa</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Settings Page */}
          {activeTab === 'settings' && (
            <div className='space-y-6'>
              <div>
                <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-1'>
                  Cài đặt hệ thống
                </h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  Quản lý cấu hình và tùy chọn hệ thống
                </p>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* Settings Menu */}
                <div className='lg:col-span-1'>
                  <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 space-y-2'>
                    {['Chung', 'Thông báo', 'Bảo mật', 'Thanh toán', 'Giao diện', 'Ngôn ngữ'].map(
                      (item, idx) => (
                        <button
                          key={idx}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                            idx === 0
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white text-gray-700'
                          }`}
                        >
                          {item}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                {/* Settings Content */}
                <div className='lg:col-span-2 space-y-6'>
                  {/* General Settings */}
                  <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-4'>
                      Cài đặt chung
                    </h3>
                    <div className='space-y-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Tên hệ thống
                        </label>
                        <input
                          type='text'
                          defaultValue='EnglishHub'
                          className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                        />
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Email liên hệ
                        </label>
                        <input
                          type='email'
                          defaultValue='contact@englishhub.com'
                          className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                        />
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Số điện thoại
                        </label>
                        <input
                          type='tel'
                          defaultValue='+84 123 456 789'
                          className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                        />
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Địa chỉ
                        </label>
                        <textarea
                          rows={3}
                          defaultValue='123 Đường ABC, Quận XYZ, TP.HCM'
                          className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                        />
                      </div>
                      <button className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                        <Save size={18} />
                        Lưu thay đổi
                      </button>
                    </div>
                  </div>

                  {/* Notification Settings */}
                  <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-4'>
                      Cài đặt thông báo
                    </h3>
                    <div className='space-y-4'>
                      {[
                        { label: 'Thông báo email', desc: 'Nhận thông báo qua email' },
                        { label: 'Thông báo đẩy', desc: 'Nhận thông báo trên trình duyệt' },
                        { label: 'Thông báo SMS', desc: 'Nhận thông báo qua tin nhắn' },
                        {
                          label: 'Thông báo học viên mới',
                          desc: 'Thông báo khi có học viên đăng ký mới',
                        },
                        {
                          label: 'Thông báo thanh toán',
                          desc: 'Thông báo khi có giao dịch thanh toán',
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className='flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg'
                        >
                          <div>
                            <p className='font-medium text-gray-800 dark:text-white'>
                              {item.label}
                            </p>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>{item.desc}</p>
                          </div>
                          <label className='relative inline-flex items-center cursor-pointer'>
                            <input
                              type='checkbox'
                              defaultChecked={idx < 2}
                              className='sr-only peer'
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Security Settings */}
                  <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-4'>
                      Bảo mật
                    </h3>
                    <div className='space-y-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Mật khẩu hiện tại
                        </label>
                        <div className='relative'>
                          <input
                            type='password'
                            className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                          />
                          <Lock
                            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                            size={18}
                          />
                        </div>
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Mật khẩu mới
                        </label>
                        <div className='relative'>
                          <input
                            type='password'
                            className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                          />
                          <Lock
                            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                            size={18}
                          />
                        </div>
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Xác nhận mật khẩu mới
                        </label>
                        <div className='relative'>
                          <input
                            type='password'
                            className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
                          />
                          <Lock
                            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                            size={18}
                          />
                        </div>
                      </div>
                      <button className='flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
                        <Lock size={18} />
                        Đổi mật khẩu
                      </button>
                    </div>
                  </div>

                  {/* Appearance Settings */}
                  <div className='bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-4'>
                      Giao diện
                    </h3>
                    <div className='space-y-4'>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Chế độ hiển thị
                        </label>
                        <div className='flex items-center gap-4'>
                          <button
                            onClick={() => setDarkMode(false)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                              !darkMode
                                ? 'border-2 border-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300'
                            }`}
                          >
                            <Sun size={18} />
                            Sáng
                          </button>
                          <button
                            onClick={() => setDarkMode(true)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                              darkMode
                                ? 'border-2 border-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300'
                            }`}
                          >
                            <Moon size={18} />
                            Tối
                          </button>
                          {/* <button
                            onClick={() => {
                              // Auto mode: follow system preference
                              const prefersDark = window.matchMedia(
                                '(prefers-color-scheme: dark)',
                              ).matches;
                              setDarkMode(prefersDark);
                            }}
                            className='flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300 transition-colors'
                          >
                            <Globe size={18} />
                            Tự động
                          </button> */}
                        </div>
                      </div>
                      <div>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                          Ngôn ngữ
                        </label>
                        <select className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'>
                          <option>Tiếng Việt</option>
                          <option>English</option>
                          <option>中文</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Student Modal */}
      {showStudentModal && (
        <StudentModal
          student={editingItem}
          onClose={() => {
            setShowStudentModal(false);
            setEditingItem(null);
          }}
          onSave={editingItem ? handleUpdateStudent : handleCreateStudent}
        />
      )}

      {/* Course Modal */}
      {showCourseModal && (
        <CourseModal
          course={editingItem}
          onClose={() => {
            setShowCourseModal(false);
            setEditingItem(null);
          }}
          onSave={editingItem ? handleUpdateCourse : handleCreateCourse}
        />
      )}

      {/* Lesson Modal */}
      {showLessonModal && (
        <LessonModal
          lesson={editingItem}
          courses={allCourses}
          onClose={() => {
            setShowLessonModal(false);
            setEditingItem(null);
          }}
          onSave={editingItem ? handleUpdateLesson : handleCreateLesson}
        />
      )}

      {/* Detail Modal */}
      {showDetailModal && detailItem && (
        <DetailModal
          item={detailItem}
          type={activeTab}
          onClose={() => {
            setShowDetailModal(false);
            setDetailItem(null);
          }}
        />
      )}
    </div>
  );
}

// Student Modal Component
function StudentModal({ student, onClose, onSave }: any) {
  const [formData, setFormData] = useState({
    name: student?.name || '',
    email: student?.email || '',
    phone: student?.phone || '',
    level: student?.level || 'A1',
    status: student?.status || 'active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className='fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 transition-colors'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
            {student ? 'Chỉnh sửa học viên' : 'Thêm học viên mới'}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Họ và tên
            </label>
            <input
              type='text'
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Email
            </label>
            <input
              type='email'
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Số điện thoại
            </label>
            <input
              type='tel'
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Trình độ
            </label>
            <select
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            >
              <option value='A1'>A1</option>
              <option value='A2'>A2</option>
              <option value='B1'>B1</option>
              <option value='B2'>B2</option>
              <option value='C1'>C1</option>
              <option value='C2'>C2</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Trạng thái
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            >
              <option value='active'>Đang học</option>
              <option value='inactive'>Tạm nghỉ</option>
            </select>
          </div>
          <div className='flex items-center gap-3 pt-4'>
            <button
              type='button'
              onClick={onClose}
              className='flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
            >
              Hủy
            </button>
            <button
              type='submit'
              className='flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
            >
              {student ? 'Cập nhật' : 'Tạo mới'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Course Modal Component
function CourseModal({ course, onClose, onSave }: any) {
  const [formData, setFormData] = useState({
    name: course?.name || '',
    description: course?.description || '',
    category: course?.category || 'Cơ bản',
    lessons: course?.lessons || 0,
    duration: course?.duration || '',
    status: course?.status || 'active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className='fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 max-h-[90vh] overflow-y-auto transition-colors'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
            {course ? 'Chỉnh sửa khóa học' : 'Tạo khóa học mới'}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Tên khóa học
            </label>
            <input
              type='text'
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Mô tả
            </label>
            <textarea
              required
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Danh mục
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            >
              <option value='Cơ bản'>Cơ bản</option>
              <option value='Thương mại'>Thương mại</option>
              <option value='Luyện thi'>Luyện thi</option>
              <option value='Giao tiếp'>Giao tiếp</option>
              <option value='Ngữ pháp'>Ngữ pháp</option>
            </select>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Số bài học
              </label>
              <input
                type='number'
                required
                min='0'
                value={formData.lessons}
                onChange={(e) => setFormData({ ...formData, lessons: parseInt(e.target.value) })}
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Thời lượng
              </label>
              <input
                type='text'
                required
                placeholder='48h'
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
              />
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Trạng thái
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            >
              <option value='active'>Đang hoạt động</option>
              <option value='inactive'>Tạm dừng</option>
            </select>
          </div>
          <div className='flex items-center gap-3 pt-4'>
            <button
              type='button'
              onClick={onClose}
              className='flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
            >
              Hủy
            </button>
            <button
              type='submit'
              className='flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
            >
              {course ? 'Cập nhật' : 'Tạo mới'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Lesson Modal Component
function LessonModal({ lesson, courses, onClose, onSave }: any) {
  const [formData, setFormData] = useState({
    title: lesson?.title || '',
    course: lesson?.course || courses[0]?.name || '',
    duration: lesson?.duration || '',
    status: lesson?.status || 'published',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className='fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 transition-colors'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
            {lesson ? 'Chỉnh sửa bài học' : 'Tạo bài học mới'}
          </h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Tiêu đề
            </label>
            <input
              type='text'
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Khóa học
            </label>
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            >
              {courses.map((course: any) => (
                <option key={course.id} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Thời lượng
            </label>
            <input
              type='text'
              required
              placeholder='15:30'
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
              Trạng thái
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
            >
              <option value='published'>Đã xuất bản</option>
              <option value='draft'>Bản nháp</option>
            </select>
          </div>
          <div className='flex items-center gap-3 pt-4'>
            <button
              type='button'
              onClick={onClose}
              className='flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
            >
              Hủy
            </button>
            <button
              type='submit'
              className='flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
            >
              {lesson ? 'Cập nhật' : 'Tạo mới'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Detail Modal Component
function DetailModal({ item, type, onClose }: any) {
  return (
    <div className='fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto transition-colors'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>Chi tiết</h2>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
          >
            <X size={24} />
          </button>
        </div>
        <div className='space-y-4'>
          {type === 'students' && (
            <>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Họ và tên</p>
                  <p className='font-semibold dark:text-white'>{item.name}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Email</p>
                  <p className='font-semibold dark:text-white'>{item.email}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Số điện thoại</p>
                  <p className='font-semibold dark:text-white'>{item.phone}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Trình độ</p>
                  <p className='font-semibold dark:text-white'>{item.level}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Tiến độ</p>
                  <p className='font-semibold dark:text-white'>{item.progress}%</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Trạng thái</p>
                  <p className='font-semibold'>
                    {item.status === 'active' ? 'Đang học' : 'Tạm nghỉ'}
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Ngày tham gia</p>
                  <p className='font-semibold dark:text-white'>{item.joinDate}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Số khóa học</p>
                  <p className='font-semibold dark:text-white'>{item.courses}</p>
                </div>
              </div>
            </>
          )}
          {type === 'courses' && (
            <>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Tên khóa học</p>
                <p className='font-semibold text-lg'>{item.name}</p>
              </div>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Mô tả</p>
                <p className='font-semibold'>{item.description}</p>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Danh mục</p>
                  <p className='font-semibold dark:text-white'>{item.category}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Trạng thái</p>
                  <p className='font-semibold'>
                    {item.status === 'active' ? 'Đang hoạt động' : 'Tạm dừng'}
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Số bài học</p>
                  <p className='font-semibold dark:text-white'>{item.lessons}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Thời lượng</p>
                  <p className='font-semibold dark:text-white'>{item.duration}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Số học viên</p>
                  <p className='font-semibold dark:text-white'>{item.students}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Đánh giá</p>
                  <p className='font-semibold dark:text-white'>{item.rating} ⭐</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Doanh thu</p>
                  <p className='font-semibold text-green-600'>{item.revenue}</p>
                </div>
              </div>
            </>
          )}
          {type === 'videos' && (
            <>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Tiêu đề</p>
                <p className='font-semibold text-lg'>{item.title}</p>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Khóa học</p>
                  <p className='font-semibold dark:text-white'>{item.course}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Thời lượng</p>
                  <p className='font-semibold dark:text-white'>{item.duration}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Lượt xem</p>
                  <p className='font-semibold dark:text-white'>{item.views.toLocaleString()}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Lượt thích</p>
                  <p className='font-semibold dark:text-white'>{item.likes}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Trạng thái</p>
                  <p className='font-semibold'>
                    {item.status === 'published' ? 'Đã xuất bản' : 'Bản nháp'}
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-1'>Ngày upload</p>
                  <p className='font-semibold dark:text-white'>{item.uploadDate}</p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className='mt-6 flex justify-end'>
          <button
            onClick={onClose}
            className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

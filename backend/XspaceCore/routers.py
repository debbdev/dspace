from rest_framework import routers
from Xspace.viewsets import (
    UserViewSet,
    CategoryViewSet,
    CourseViewSet,
    EnrollmentViewSet,
    LessonViewSet,
    AssignmentViewSet,
    SubmissionViewSet,
    QuizViewSet,
    QuestionViewSet,
    DiscussionViewSet,
    ReviewViewSet,
    NotificationViewSet
)

# Initialize the default router
router = routers.DefaultRouter()

# Registering viewsets with the router
router.register(r'users', UserViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'enrollments', EnrollmentViewSet)
router.register(r'lessons', LessonViewSet)
router.register(r'assignments', AssignmentViewSet)
router.register(r'submissions', SubmissionViewSet)
router.register(r'quizzes', QuizViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'discussions', DiscussionViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'notifications', NotificationViewSet)

# The router.urls attribute will automatically generate the appropriate URLs for each viewset
urlpatterns = router.urls

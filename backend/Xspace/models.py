from django.db import models
<<<<<<< HEAD
<<<<<<< HEAD

# Create your models here.
=======
=======
>>>>>>> master
from django.contrib.auth.models import AbstractUser


#user Model
class User(AbstractUser):
    role_choices = [
        ('student','Student'), 
        ('admin','Admin'), 
        ('instructor','Instructor')
        ]
    role = models.CharField(max_length=20,choices=role_choices)
    profile_picture =models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    
    def __str__(self):
        return self.username


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


# Course Model
class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    instructor = models.ForeignKey(User, related_name='courses', on_delete=models.CASCADE)
    category = models.ForeignKey(Category, related_name='courses', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='course_images/', null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    is_published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


# Enrollment Model
class Enrollment(models.Model):
    user = models.ForeignKey(User, related_name='enrollments', on_delete=models.CASCADE)
    course = models.ForeignKey(Course, related_name='enrollments', on_delete=models.CASCADE)
    enrollment_date = models.DateTimeField(auto_now_add=True)
    progress = models.FloatField(default=0.0)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} enrolled in {self.course.title}"


# Lesson Model
class Lesson(models.Model):
    course = models.ForeignKey(Course, related_name='lessons', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    video_url = models.URLField(null=True, blank=True)
    order = models.IntegerField()

    def __str__(self):
        return self.title


# Assignment Model
class Assignment(models.Model):
    lesson = models.ForeignKey(Lesson, related_name='assignments', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    due_date = models.DateTimeField(null=True, blank=True)
    max_score = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title


# Submission Model
class Submission(models.Model):
    assignment = models.ForeignKey(Assignment, related_name='submissions', on_delete=models.CASCADE)
    student = models.ForeignKey(User, related_name='submissions', on_delete=models.CASCADE)
    submission_file = models.FileField(upload_to='submissions/', null=True, blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    grade = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.student.username}'s submission for {self.assignment.title}"


# Quiz Model
class Quiz(models.Model):
    lesson = models.ForeignKey(Lesson, related_name='quizzes', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    total_marks = models.IntegerField()

    def __str__(self):
        return self.title


# Question Model
class Question(models.Model):
    question_type_choices = [
        ('mcq', 'Multiple Choice'),
        ('short_answer', 'Short Answer'),
    ]
    quiz = models.ForeignKey(Quiz, related_name='questions', on_delete=models.CASCADE)
    question_text = models.TextField()
    question_type = models.CharField(max_length=20, choices=question_type_choices)
    choices = models.JSONField(null=True, blank=True)
    correct_answer = models.CharField(max_length=200)

    def __str__(self):
        return self.question_text


# Discussion Model
class Discussion(models.Model):
    course = models.ForeignKey(Course, related_name='discussions', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='discussions', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Discussion in {self.course.title} by {self.user.username}"


# Review Model
class Review(models.Model):
    course = models.ForeignKey(Course, related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='reviews', on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.user.username} for {self.course.title}"


# Notification Model
class Notification(models.Model):
    user = models.ForeignKey(User, related_name='notifications', on_delete=models.CASCADE)
    message = models.CharField(max_length=255)
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
<<<<<<< HEAD
        return f"Notification for {self.user.username}: {self.message}"
>>>>>>> aaaa89ef (Integrated Frontend)
=======
        return f"Notification for {self.user.username}: {self.message}"
>>>>>>> master

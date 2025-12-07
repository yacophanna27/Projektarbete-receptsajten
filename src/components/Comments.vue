<script>
import { getComments, postComment } from '../APIutilities/apihelpers.js';

export default {
  name: 'Comments',
  props: {
    recipeId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      comments: [],
      newComment: {
        author: '',
        text: '',
      },
      loading: false,
      error: null,
      isSubmitting: false,
    };
  },

  created() {
    this.fetchComments();
  },
  
  methods: {
    async fetchComments() {
      this.loading = true;
      this.error = null;
      try {
        const data = await getComments(this.recipeId);
        this.comments = Array.isArray(data) ? data : [];
        console.log('Comments fetched:', this.comments);
        
      } catch (err) {
        this.error = 'Failed to load comments. Please try again.';
        console.error('Error fetching comments:', err);
        this.comments = [];
      } finally {
        this.loading = false;
      }
    },

    async submitComment() {
      if (!this.newComment.author || !this.newComment.text) {
        this.error = 'Please fill in both author name and comment.';
        return;
      }

      this.isSubmitting = true;
      this.error = null;

      try {
        const commentData = {
          name: this.newComment.author,
          comment: this.newComment.text,
          createdAt: new Date().toISOString(),
        };

        console.log('Sending comment data:', commentData);
        const response = await postComment(this.recipeId, commentData);
        console.log('API response:', response);
        
        
        this.newComment.author = '';
        this.newComment.text = '';
        
        
        await this.fetchComments();
        console.log('Comment posted successfully');
      } catch (err) {
        this.error = 'Failed to post comment. Please try again.';
        console.error('Error posting comment:', err);
      } finally {
        this.isSubmitting = false;
      }
    },

    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('sv-SE',{
        hour: '2-digit',
        minute: '2-digit',
      });
    },
  },
};
</script>

<template>
  <div>
    <h3>Comments</h3>
    
    <div class="form-group">
      <label for="author">Name:</label>
      <input
        id="author"
        v-model="newComment.author"
        type="text"
        placeholder="Your name"
        :disabled="isSubmitting"
      />
    </div>

    <div class="form-group">
      <label for="comment-text">Comment:</label>
      <textarea
        id="comment-text"
        v-model="newComment.text"
        placeholder="Share your thoughts about this recipe..."
        rows="3"
        :disabled="isSubmitting"
      ></textarea>
    </div>

    <button
      @click="submitComment"
      :disabled="isSubmitting"
      class="submit-btn"
    >
      {{ isSubmitting ? 'Posting...' : 'Post Comment' }}
    </button>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <div v-if="loading" class="loading">
      Loading comments...
    </div>

    <div v-else>
      <div v-if="comments.length === 0" class="no-comments">
        No comments yet. Be the first to comment!
      </div>
      
      <div v-for="comment in comments" :key="comment.id" class="comment-item">
        <div class="comment-header">
          <span class="comment-author">{{ comment.name }}</span>
          <span v-if="comment.createdAt" class="comment-date">
            {{ formatDate(comment.createdAt) }}
          </span>
        </div>
        <div class="comment-text">{{ comment.comment }}</div>
      </div>
    </div>
  </div>

</template>

<style scoped>

.error-message {
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: #ffe6e6;
  color: #c33;
  border-left: 4px solid #c33;
  border-radius: 4px;
  text-align: center;
}

.loading {
  text-align: center;
  color: #999;
  padding: 1rem;
  font-size: 1rem;
}

.no-comments {
  text-align: center;
  color: #999;
  padding: 1rem;
}

.comment-item {
  background-color: #f9f9f9;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.comment-author {
  font-weight: 600;
  color: #000000;
  font-size: 0.95rem;
}

.comment-date {
  font-size: 0.75rem;
  color: #999;
}

.comment-text {
  color: #555;
  line-height: 1.5;
  margin: 0;
}

h3 {
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: #666;
  text-align: center;
  font-size: 1.7rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
  color: #555;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #c69c6d;
  box-shadow: 0 0 0 2px rgba(198, 156, 109, 0.1);
}

.submit-btn {
  display: block;
  width: 100%;
  background-color: #e1c7ea;
  color: #444;
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;
  margin-bottom: 2rem;
}

.submit-btn:hover:not(:disabled) {
  background-color: #d4b5dd;
  border: 1px solid #fff;
}

.submit-btn:disabled {
  background-color: #e1c7ea;
  opacity: 0.6;
  cursor: not-allowed;
}

</style>
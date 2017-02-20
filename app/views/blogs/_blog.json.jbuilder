json.extract! blog, :id, :title, :para_heading, :paragraph, :created_at, :updated_at
json.url blog_url(blog, format: :json)
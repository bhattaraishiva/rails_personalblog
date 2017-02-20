require 'rails_helper'

RSpec.describe "blogs/new", type: :view do
  before(:each) do
    assign(:blog, Blog.new(
      :title => "MyString",
      :para_heading => "MyString",
      :paragraph => "MyString"
    ))
  end

  it "renders new blog form" do
    render

    assert_select "form[action=?][method=?]", blogs_path, "post" do

      assert_select "input#blog_title[name=?]", "blog[title]"

      assert_select "input#blog_para_heading[name=?]", "blog[para_heading]"

      assert_select "input#blog_paragraph[name=?]", "blog[paragraph]"
    end
  end
end

require 'rails_helper'

RSpec.describe "blogs/edit", type: :view do
  before(:each) do
    @blog = assign(:blog, Blog.create!(
      :title => "MyString",
      :para_heading => "MyString",
      :paragraph => "MyString"
    ))
  end

  it "renders the edit blog form" do
    render

    assert_select "form[action=?][method=?]", blog_path(@blog), "post" do

      assert_select "input#blog_title[name=?]", "blog[title]"

      assert_select "input#blog_para_heading[name=?]", "blog[para_heading]"

      assert_select "input#blog_paragraph[name=?]", "blog[paragraph]"
    end
  end
end

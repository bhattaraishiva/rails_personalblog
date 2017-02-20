require 'rails_helper'

RSpec.describe "blogs/index", type: :view do
  before(:each) do
    assign(:blogs, [
      Blog.create!(
        :title => "Title",
        :para_heading => "Para Heading",
        :paragraph => "Paragraph"
      ),
      Blog.create!(
        :title => "Title",
        :para_heading => "Para Heading",
        :paragraph => "Paragraph"
      )
    ])
  end

  it "renders a list of blogs" do
    render
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "Para Heading".to_s, :count => 2
    assert_select "tr>td", :text => "Paragraph".to_s, :count => 2
  end
end

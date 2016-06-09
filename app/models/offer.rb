# == Schema Information
#
# Table name: offers
#
#  id         :integer          not null, primary key
#  data       :json
#  name       :string
#  version    :integer          default(0)
#  company_id :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Offer < ApplicationRecord
  belongs_to :user
  belongs_to :company

  validates :company, :user, :name, :data, :version, presence: true

  before_save :set_version
  # after_save :generate_html

  private

  def set_version
    self.version += 1
  end

  def generate_html
    title = self.name
    data = self.data.map { |block| block["data"] }.join
    html = <<-HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>#{title}</title>
    <link rel="stylesheet" href="/app/css/app.css">
</head>
<body>
    #{data}
</body>
</html>
    HTML
    f = File.open("#{Rails.root.to_s}/public/offers/#{Dealer.current.id}/#{self.id}.html", "w")
    f.write html
    f.close
  end
end
